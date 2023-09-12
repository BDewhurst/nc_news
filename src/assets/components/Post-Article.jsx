import { useState } from "react";
import { postAnArticle } from "../../api";
import "./css/article-poster.css"

const PostArticle = () => {
  const [articleUsername, setArticleUsername] = useState("");
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [body, setBody] = useState("");

  const handleArticleSubmit = (e) => {
    e.preventDefault();
    const articleData = {
      author: articleUsername,
      title,
      topic,
      article_img_url: imageUrl,
      body,
    };

    postAnArticle(articleData).then(() => {
      setArticleUsername("");
      setTitle("");
      setTopic("");
      setImageUrl("");
      setBody("");

    });
  };

  return (
    <main id="article-poster">
      <h6 id="post-article-header">Post an Article</h6>
      <form className="article-adder" onSubmit={handleArticleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="article-username"
          value={articleUsername}
          onChange={(e) => setArticleUsername(e.target.value)}
        />

        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="topic">Topic:</label>
        <input
          type="text"
          id="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />

        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <label htmlFor="post-article">Post Article here:</label>
        <textarea
          id="post-comment"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button id="add-article-button">Add Article</button>
      </form>
    </main>
  );
};

export default PostArticle;
