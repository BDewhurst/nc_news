import { useState, useEffect } from "react"
import { getAllArticles } from "../../api"
import "./css/articles.css"
import ArticleCard from "./Article-Card";
import { format } from 'date-fns';

const Articles  = () => {
    const [articles, setArticles] = useState([])
    const [isLoading , setIsLoading] = useState(true);

    useEffect(() => {
        getAllArticles().then((articlesData) => {
            setArticles(articlesData)
                setIsLoading(false)
        })
    }, [])

    return (
        <main id="articles-main">
        {isLoading ? (
            <p>Loading...</p>
          ) : false}
        <ul className="article-list">
          {articles.map(
            ({
              author,
              title,
              article_id,
              article_img_url,
              comment_count,
              created_at,
              topic,
              votes
            }) => (
              <ArticleCard
              key= {article_id}
              title= {title}
              author= {author}
              article_img_url={article_img_url}
              comment_count= {comment_count}
              created_at={format(new Date(created_at), 'MMMM dd, yyyy - HH:mm:ss')}
              topic={topic}
              votes={votes}/>
            )
          )}
             </ul>
        </main>
      );
    };
    

export default Articles