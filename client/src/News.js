import React, { Component } from 'react';
import { withProvider } from "./context"

class News extends Component {
    componentDidMount() {
        this.props.getNews()
    }

    render() {
        const mappedNews = this.props.news.articles && this.props.news.articles.map(article => {
            const emptyArray = []
            const split = article.content.split(" ")
            emptyArray.push(split)
            split.splice(-2)
            const rejoin = split.join(" ")
            return (
                <>
                    <div style={{ margin: "0% 2%" }}>
                        <h2 style={{ color: "lime" }}>{article.title}</h2>
                        <p>By: {article.author}</p>
                        <img style={{ width: "45%" }} alt="" src={article.urlToImage} />
                        <p>{rejoin}<a target="_blank" rel="noopener noreferrer" href={article.url} style={{ color: "lime" }}>Read More</a></p>
                    </div>
                    <h1 style={{ fontFamily: "cursive", fontSize: "4em", margin: 0 }}>...</h1>
                </>
            )
        })
        return (
            <div className="News" style={{ textAlign: "center", }}>
                {mappedNews}
            </div>
        );
    }
}

export default withProvider(News)
