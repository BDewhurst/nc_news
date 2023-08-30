import { useEffect } from "react"
import { deleteCommentById, getCommentsById } from "../../api"
import { format } from 'date-fns';


const CommentCard = ({
  comments,
  setComments,
  article_id,
  setNoComments
}) => {

  useEffect(() => {
    getCommentsById(article_id).then((commentData) => {
      setComments(commentData)
      setNoComments(commentData.length === 0);
    })
  }, [article_id])

  const handleDelete = (comment_id) => {
    deleteCommentById(comment_id).then(() => {
      getCommentsById(article_id)
      .then((updatedCommentData) => {
        setComments(updatedCommentData);
      })
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
              <p>Author - {author}</p>
              <p>Posted on: {format(new Date(created_at), 'MMMM, dd, yyyy - HH:mm:ss')}</p>
              <p>Votes - {votes}</p>
              <button onClick={() => handleDelete(comment_id)}>Delete Comment</button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

export default CommentCard