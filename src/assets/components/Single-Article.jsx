import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import NewArticleCard from "./New-Article-Card";
import { getArticleById, getCommentsById } from "../../api";
import { format, setSeconds } from 'date-fns';
import "./css/new-article-card.css";
import CommentCard from "./Comment-Card";


export const SingleArticle = () => {
  const { article_id } = useParams()
  
 
  const [individualArticle, setIndividualArticle] = useState([])
  const [comments, setComments] = useState([])
  const [noComments, setNoComments] = useState(false);

 

  useEffect(() => {
    getArticleById(article_id).then((articleData) => {
      setIndividualArticle(articleData)

    
    })
  }, [article_id])

  useEffect(() => {
    getCommentsById(article_id).then((commentData) => {
      setComments(commentData)
      setNoComments(commentData.length === 0);
      })
}, [])




    return (
    <main id="article-comments">
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
              key={article_id}
              title={title}
              author={author}
              article_img_url={article_img_url}
              comment_count={comment_count}
              created_at={format(new Date(created_at), 'MMMM dd, yyyy - HH:mm:ss')}
              topic={topic}
              votes={votes}
              body={body} />
          )
        )}
      </ul>
      <ul className="comments">
      <h5>Comments</h5>
      <br>
      </br>
      {noComments ? (
          <p id ="no-comment">Be the first to comment...</p>
        ) :  (
          comments.map(({ comment_id, body, author, created_at, votes }) => (
            <CommentCard
              key={comment_id}
              body={body}
              author={author}
              created_at={format(new Date(created_at), 'MMMM dd, yyyy - HH:mm:ss')}
              votes={votes}
            />
          ))
        )}
      </ul>
    </main>
  );
};


export default SingleArticle