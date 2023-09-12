import { useEffect } from "react"
import { deleteCommentById, getCommentsById, voteOnCommentById } from "../../api"
import { format } from 'date-fns';


const CommentCard = ({
  comments,
  setComments,
  article_id,
  setNoComments,
  votes, 
  setVotes
}) => {

  useEffect(() => {
    getCommentsById(article_id).then((commentData) => {
      setComments(commentData)
      setNoComments(commentData.length === 0);
      setVotes(commentData.votes);
    })
  }, [article_id, votes])

  const handleDelete = (comment_id) => {
    deleteCommentById(comment_id).then(() => {
      getCommentsById(article_id)
      .then((updatedCommentData) => {
        setComments(updatedCommentData);
      })
    })
  }
  const handleCommentUpVotes = (comment_id) => {
    voteOnCommentById(comment_id, 1).then(()=> {
      setVotes((votes) => votes + 1);
    })
  
  };
  const handleCommentDownVotes = (comment_id) => {
    voteOnCommentById(comment_id, -1).then(()=> {
      setVotes((votes) => votes - 1)
    })
  
  }
  return (
    <ul className="comments">
      <h5>Comments</h5>
      <br />
      {comments.length === 0 ? (
        <p id="no-comment">Be the first to comment...</p>
      ) : (
        comments.map(({ comment_id, body, author, created_at, votes }) => (
          <li key={comment_id} className="new-comment">
            <div className="item-text">
              <h4>{body}</h4>
              <p>Author: {author}</p>
              <p>Posted on: {format(new Date(created_at), 'MMMM, dd, yyyy - HH:mm:ss')}</p>
              <p>Votes: {votes}</p>
              <div className= "buttons-comments">
              <button onClick={() => handleCommentUpVotes(comment_id)} id="up-button">Up</button>
              <button onClick={() => handleCommentDownVotes(comment_id)} id="down-button">Down</button>
              <button onClick={() => handleDelete(comment_id)} id="delete-button">Delete Comment</button>
              </div>
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

export default CommentCard