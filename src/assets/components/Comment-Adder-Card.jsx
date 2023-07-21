import { useState } from "react"
import { postComment } from "../../api"
import { useParams } from "react-router-dom"
import "./css/comment-adder.css"


const CommentAdder = ({ setComments }) => {
    const { article_id } = useParams()
    const [newComment, setNewComment] = useState("")
    const [username, setUsername] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const commentData = {"username": username,
            "body": newComment
        }

        postComment(commentData, article_id).then((postedComment) => {
            setComments((currentComments) => {
                return [postedComment.comment[0], ...currentComments]
            })
            setNewComment("");
            setUsername("");
        })
    }
    return (
        <main id="comment-poster">
            <h6>Post a comment</h6>
        <form className="comment-adder" onSubmit={handleSubmit}>
             <label htmlFor="username" id="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
            <label htmlFor="post-comment" id='comment'> Add your comment here:</label>
            <textarea id="post-comment" value={newComment} onChange={(e) => {
                setNewComment(e.target.value)
            }} />
            <button id='add-comment-button'>Add Comment</button>
        </form>
        </main>
    )
}
export default CommentAdder