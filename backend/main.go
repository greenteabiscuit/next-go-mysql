package main

import (
	"github.com/gin-gonic/gin"
	"github.com/greenteabiscuit/next-gin-mysql/backend/article"
	"github.com/greenteabiscuit/next-gin-mysql/backend/handler"
)

func main() {
	article := article.New()
	r := gin.Default()
	r.GET("/article", handler.ArticlesGet(article))
	r.POST("/article", handler.ArticlePost(article))

	r.Run() // listen and serve on 0.0.0.0:8080
}
