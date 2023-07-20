const CommentCard = ({ author,
    body,
    votes,
    created_at,
    comment_id,
}) => {
    return (
        <li key={comment_id} className="new-comment">
        <div className="item-text">
          <h4>{body}</h4>
          <p>Author - {author}</p>
          <p>Posted on: {created_at}</p>
          <p>Votes - {votes}</p>
        </div>
      </li>
    )
}

    export default CommentCard