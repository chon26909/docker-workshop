package main

import (
	"errors"
	"fmt"
	"go-workshop/config"
	"go-workshop/lib"
	"log/slog"
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {

	config := config.InitConfig()

	fmt.Printf("config %v", config)

	db := lib.NewMySqlConnection(config)

	slog.Info("db", slog.Any("db_connection", db))

	// Echo instance
	e := echo.New()

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		Skipper:      middleware.DefaultSkipper,
		AllowOrigins: []string{"*"},
		AllowMethods: []string{http.MethodGet, http.MethodHead, http.MethodPut, http.MethodPatch, http.MethodPost, http.MethodDelete},
	}))

	// Routes
	e.GET("/", func(c echo.Context) error {
		message := map[string]string{
			"message": fmt.Sprintf("server is running port %d", config.App.Port),
		}
		// Return JSON response
		return c.JSON(http.StatusOK, message)
	})
	e.GET("/hello", hello)

	// Start server
	if err := e.Start(fmt.Sprintf(":%d", config.App.Port)); err != nil && !errors.Is(err, http.ErrServerClosed) {
		slog.Error("failed to start server", "error", err)
	}
}

func hello(c echo.Context) error {
	// JSON Message
	message := map[string]string{
		"message": "Hello, World!",
	}

	// Return JSON response
	return c.JSON(http.StatusOK, message)
}
