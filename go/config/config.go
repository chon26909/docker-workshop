package config

import (
	"fmt"
	"os"
	"path/filepath"

	"github.com/spf13/viper"
)

type Config struct {
	App App `mapstructure:"app"`
	Db  Db  `mapstructure:"db"`
}

type App struct {
	Port int `mapstructure:"port"`
}

type Db struct {
	Host     string `mapstructure:"host"`
	Port     int    `mapstructure:"port"`
	Username string `mapstructure:"username"`
	Password string `mapstructure:"password"`
	Database string `mapstructure:"database"`
}

var config *Config

func InitConfig() *Config {

	// Load configuration based on environment
	env := os.Getenv("ENVIRONMENT")
	if env == "" {
		env = "local"
	}

	configPath := filepath.Join("config", env)
	configName := "config"

	viper.SetConfigName(configName)
	viper.AddConfigPath(configPath)
	viper.SetConfigType("yml")
	viper.AutomaticEnv()

	err := viper.ReadInConfig()
	if err != nil {
		panic(fmt.Errorf("config file %v", err))
	}

	viper.WatchConfig()

	err = viper.Unmarshal(&config)
	if err != nil {
		panic(err)
	}
	return config
}
