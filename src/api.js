import axios from "axios"

const ncNewsApi = axios.create ({
    baseURL: "https://nc-news-ul5y.onrender.com/api"
})

export const getAllArticles = () => {
    return ncNewsApi.get(`/articles`).then((res) => {
        return res.data.articles
    })
}