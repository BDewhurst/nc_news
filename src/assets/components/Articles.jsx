import { useState, useEffect } from "react"
import { getAllArticles } from "../../api"
import "./css/articles.css"


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
          ) : null}
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
              votes,
            }) => (
              <li key={article_id} className="article">
                <img src={article_img_url} alt={title} />
                <div className="item-text">
                  <h3>{title}</h3>
                  <p>Author - {author}</p>
                  <p> Topic - {topic}</p>
                  <p>{created_at}</p>
                  <p>Comments - {comment_count}</p>
                  <p>Votes - {votes}</p>
                </div>
              </li>
            )
          )}
             </ul>
        </main>
      );
    };
    

export default Articles