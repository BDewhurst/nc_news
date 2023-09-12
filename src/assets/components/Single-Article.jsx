import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import NewArticleCard from "./New-Article-Card";
import { getArticleById, voteOnArticleById } from "../../api";
import { format } from 'date-fns';
import "./css/new-article-card.css";
import CommentCard from "./Comment-Card";
import CommentAdder from "./Comment-Adder-Card";


export const SingleArticle = () => {
  const { article_id } = useParams()
  
 
  const [individualArticle, setIndividualArticle] = useState([]);
  const [comments, setComments] = useState([])
  const [noComments, setNoComments] = useState(false);
  const [votes, setVotes] = useState(0)


  useEffect(() => {
    getArticleById(article_id).then((articleData) => {
  
      setIndividualArticle(articleData) 
      setVotes(articleData.votes);
    })
  }, [article_id, votes])




const handleUpVotes = () => {
  voteOnArticleById(article_id, 1).then(()=> {
    setVotes((votes) => votes + 1);
  })

};
const handleDownVotes = () => {
  voteOnArticleById(article_id, -1).then(()=> {
    setVotes((votes) => votes - 1)
  })

}

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
              created_at={format(new Date(created_at), 'MMMM, dd, yyyy - HH:mm:ss')}
              topic={topic}
              votes={votes}
              body={body} 
              />
          )
        )}
       <h6 id="vote-header">Give us your opinion!</h6>
          <div id='buttons'>
        <button onClick= {handleUpVotes} id="upvote">Upvote</button>
        <button onClick={handleDownVotes}id="downvote">Downvote</button>
        </div>
      </ul>
      <CommentAdder setComments={setComments}/>
      <ul className="comments">
      <br>
      </br>
            <CommentCard
           setComments={setComments}
           setNoComments={setNoComments}
           comments={comments}
           article_id={article_id}
            />
      </ul>
    </main>
  );
};


export default SingleArticle