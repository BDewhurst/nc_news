import React from 'react';
import { Link } from 'react-router-dom';
import ArticleCard from './Article-Card';

const ArticleList = ({ articles }) => {
  return (
    <ul className="article-list">
      {articles.map(({ article_id, ...articleData }) => (
        <Link key={article_id} to={`${article_id}`} className="custom-link">
          <ArticleCard key={article_id} {...articleData} />
        </Link>
      ))}
    </ul>
  );
};

export default ArticleList;