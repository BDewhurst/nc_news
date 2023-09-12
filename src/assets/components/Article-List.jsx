import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArticleCard from './Article-Card';
import { getAllArticles } from '../../api';

const ArticleList = ({ order, sort_by, topic }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  const limit = 10;

  useEffect(() => {
    const fetchArticlesAndScrollTop = async () => {
      const articlesData = await getAllArticles(order, sort_by, topic, limit, page);
      setArticles(articlesData);

      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    fetchArticlesAndScrollTop();
  }, [order, sort_by, topic, page]);

  return (
    <div>
      <ul className="article-list">
        {articles.map(({ article_id, ...articleData }) => (
          <Link key={article_id} to={`${article_id}`} className="custom-link">
            <ArticleCard key={article_id} {...articleData} />
          </Link>
        ))}
      </ul>

      <div className="pagination">
        {page > 1 && (
          <button onClick={() => setPage(page - 1)} id="previous">Previous</button>
        )}
        {articles.length === limit && (
          <button onClick={() => setPage(page + 1)}id="next">Next</button>
        )}
      </div>
    </div>
  );
};

export default ArticleList;