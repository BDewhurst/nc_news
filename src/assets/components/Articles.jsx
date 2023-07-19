import { useState, useEffect } from "react"
import { getAllArticles } from "../../api"
import "./css/articles.css"
import ArticleCard from "./Article-Card";
import { format } from 'date-fns';
import { Link } from "react-router-dom";

const Articles  = ({isLoading, setIsLoading}) => {
    const [articles, setArticles] = useState([])


    useEffect(() => {
        getAllArticles().then((articlesData) => {
            setArticles(articlesData)
                setIsLoading(false)
        })
    }, [])

    {isLoading ? (
      <p>Loading...</p>
    ) : false}

    return (
        <main id="articles-main">

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
              <Link key ={article_id} to={`${article_id}`} className="custom-link">
              <ArticleCard
              key= {article_id}
              title= {title}
              author= {author} 
              article_img_url={article_img_url}  
              comment_count= {comment_count}
              created_at={format(new Date(created_at), 'MMMM dd, yyyy - HH:mm:ss')}
              topic={topic}
              votes={votes}/>
              </Link>
            )
          )}
             </ul>
        </main>
      );
    };
    

export default Articles