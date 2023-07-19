import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import NewArticleCard from "./New-Article-Card";
import { getArticleById } from "../../api";
import { format } from 'date-fns';
import "./css/new-article-card.css";


export const SingleArticle = ({isLoading, setIsLoading}) => {
    const { article_id } = useParams()

    const [individualArticle, setIndividualArticle] = useState([]) 

     useEffect(() => {
     getArticleById(article_id).then((articleData) => {
         setIndividualArticle(articleData)
         setIsLoading(false)
    })
 }, [article_id])

 {isLoading ? (
    <p>Loading...</p>
  ) : false}
  
    return(
<main id="single-article">
        <ul className="articles-list">
          {individualArticle.map(
            ({
              author,
              title,
              article_id,
              article_img_url,
              comment_count,
              created_at,
              topic,
              body,
              votes
            }) => (
              <NewArticleCard
              key= {article_id}
              title= {title}
              author= {author}
              article_img_url={article_img_url}
              comment_count= {comment_count}
              created_at={format(new Date(created_at), 'MMMM dd, yyyy - HH:mm:ss')}
              topic={topic}
              votes={votes}
              body= {body}/>
            )
          )}
             </ul>
        </main>
      );
    };


export default SingleArticle