import { useState, useEffect} from "react"
import { useParams } from 'react-router-dom';
import { getAllArticles } from "../../api"
import "./css/articles.css"
import ArticleCard from "./Article-Card";
import { format } from 'date-fns';
import { Link } from "react-router-dom";


const Articles  = () => {
    const [articles, setArticles] = useState([])
    const [sort_by, setSortBy] = useState("")
    const [order, setOrder] = useState("")
    const [topic, setTopic] = useState("")
    const [articlesLoading, setArticlesLoading ] = useState(true)


    useEffect(() => {
        getAllArticles(order, sort_by, topic).then((articlesData) => {
            setArticles(articlesData)
            setArticlesLoading(false)
        })
    }, [order, sort_by, topic])

    const handleSortByChange = (event) => {
     const sortByCriteria = event.target.value
     console.log(event.target.value)
      setSortBy(sortByCriteria);
    };

    const handleOrderChange = (event) => {
      const orderCriteria = event.target.value
       setOrder(orderCriteria);
     };
     const handleTopicChange = (event) => {
      const topicCriteria = event.target.value
       setTopic(topicCriteria);
     };
 

    if (articlesLoading) return <p>Loading...</p>
    return (
      <main id="articles-main">
      <div id="filter">
      <h3>Sort</h3>
      <select value={sort_by} onChange={handleSortByChange}>
        <option value="">Select a criteria</option>
        <option value="author">Author</option>
        <option value="title">Title</option>
        <option value="created_at">Created At</option>
        <option value="votes">Votes</option>
      </select>
      <p>selected: {sort_by}</p>
      <h3>Order</h3>
      <select value={order} onChange={handleOrderChange}>
        <option value="">Select order</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <p>selected: {order}</p>
      <h3>Topics</h3>
      <select value={topic} onChange={handleTopicChange}>
        <option value="">Select topic</option>
        <option value="football">Football</option>
        <option value="cooking">Cusine</option>
        <option value="coding">Coding</option>

      </select>
      <p>selected: {topic}</p>
    </div>

        <ul className="article-list">
          {articles.map(
            ({
              author,
              title,
              article_id,
              article_img_url,
              comment_count,
              created_at,
              topic,
              votes
            }) => (
              <Link key ={article_id} to={`${article_id}`} className="custom-link">
              <ArticleCard
              key= {article_id}
              title= {title}
              author= {author} 
              article_img_url={article_img_url}  
              comment_count= {comment_count}
              created_at={format(new Date(created_at), 'MMMM dd, yyyy - HH:mm:ss')}
              topic={topic}
              votes={votes}/>
              </Link>
            )
          )}
             </ul>
        </main>
      );
    };
    

export default Articles