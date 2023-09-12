import { useState, useEffect} from "react"
import { getAllArticles } from "../../api"
import "./css/articles.css"
import ArticleList from "./Article-List";
import FilterComponent from "./Filter";



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
      <FilterComponent
        sort_by={sort_by}
        order={order}
        topic={topic}
        handleSortByChange={handleSortByChange}
        handleOrderChange={handleOrderChange}
        handleTopicChange={handleTopicChange}
      />
    <ArticleList articles={articles}
    order={order}
    sort_by={sort_by}
    topic={topic}
    setArticles={setArticles}
    />
    </main>
      );
    };
    

export default Articles