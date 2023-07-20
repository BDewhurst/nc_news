

const ArticleCard = ({ author,
  title,
  article_id,
  article_img_url,
  comment_count,
  created_at,
  topic,
  votes }) => {



  return (
    <li key={article_id} className="article">
      <img src={article_img_url} alt={title}
      />
      <div className="item-text">
        <h2>{title}</h2>
        <p>Author - {author}</p>
        <p> Topic - {topic}</p>
        <p>Posted on: {created_at}</p>
        <p>Comments - {comment_count}</p>
        <p>Votes : {votes}</p>
      </div>
    </li>
  )
}

export default ArticleCard