package main

import (
	"os"

	"github.com/gin-gonic/gin"
	"github.com/greenteabiscuit/next-gin-mysql/backend/article"
	"github.com/greenteabiscuit/next-gin-mysql/backend/handler"
	"github.com/greenteabiscuit/next-gin-mysql/backend/lib"
	"github.com/joho/godotenv"
)

func main() {
	if os.Getenv("USE_HEROKU") != "1" {
		err := godotenv.Load()
		if err != nil {
			panic(err)
		}
	}

	article := article.New()

	lib.DBOpen()
	defer lib.DBClose()

	r := gin.Default()
	r.GET("/article", handler.ArticlesGet(article))
	r.POST("/article", handler.ArticlePost(article))

	r.Run() // listen and serve on 0.0.0.0:8080
}
