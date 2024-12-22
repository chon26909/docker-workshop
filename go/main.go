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

	e.Use(middleware.CORS())

	// Routes
	e.GET("/", hello)

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
