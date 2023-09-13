import { useEffect } from "react";
import { deleteCommentById, getCommentsById, voteOnCommentById } from "../../api";
import { format } from 'date-fns';
import "./css/comments.css"
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
      setComments(commentData);
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
      <h5 id="comments-heading">Comments</h5>
      {comments.length === 0 ? (
        <p id="no-comment" className="comment-message">Be the first to comment...</p>
      ) : (
        comments.map(({ comment_id, body, author, created_at, votes }) => (
          <li key={comment_id} className="comment-item">
            <div className="comment-text">
              <h4 id={`comment-body-${comment_id}`} className="comment-body">{body}</h4>
              <p className="comment-author">Author: {author}</p>
              <p className="comment-created">{format(new Date(created_at), 'MMMM, dd, yyyy - HH:mm:ss')}</p>
              <p id={`comment-votes-${comment_id}`} className="comment-votes">Votes: {votes}</p>
              <div className= "comment-buttons">
                <button onClick={() => handleCommentUpVotes(comment_id)} id={`up-button-${comment_id}`} className="comment-upvote-button">Up</button>
                <button onClick={() => handleCommentDownVotes(comment_id)} id={`down-button-${comment_id}`} className="comment-downvote-button">Down</button>
                <button onClick={() => handleDelete(comment_id)} id={`delete-button-${comment_id}`} className="comment-delete-button">Delete Comment</button>
              </div>
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

export default CommentCard;
