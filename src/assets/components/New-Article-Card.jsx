const NewArticleCard = ({ author,
    title,
    article_id,
    article_img_url,
    created_at,
    topic,
    body,
    votes }) => {
  
  
  
    return (
      <li key={article_id} className="new-article">
        <img src={article_img_url} alt={title} 
        />
        <div className="item-text">
          <h3>{title}</h3>
          <br>
          </br>
          <h4>{body}</h4>
          <br>
          </br>
          <p>Author - {author}</p>
          <p> Topic - {topic}</p>
          <p>Posted on: {created_at}</p>
          <p>Votes : {votes}</p>
        </div>
      </li>
    )
  }
  
  export default NewArticleCard