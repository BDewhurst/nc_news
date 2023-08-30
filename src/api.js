import axios from "axios"

const ncNewsApi = axios.create ({
    baseURL: "https://nc-news-ul5y.onrender.com/api"
})

export const getAllArticles = () => {
    return ncNewsApi.get(`/articles`).then((res) => {
        return res.data.articles
    })
}
export const getArticleById = (article_id) => {
    return ncNewsApi.get(`/articles/${article_id}`).then((res) => {
        return res.data.article
    })
}

export const getCommentsById = (article_id) => {
    return ncNewsApi.get (`/articles/${article_id}/comments`).then((res)=> {
        return res.data.comments
    })
}

export const voteOnArticleById = (article_id, votes) => {
    return ncNewsApi.patch(`/articles/${article_id}`, {"inc_vote": votes}).then((res) => {
        return res.data
    })
}

export const postComment = (newComment, article_id) => {
    return ncNewsApi.post(`/articles/${article_id}/comments`, newComment).then((res)=> {
        return res.data
    })
}

export const deleteCommentById = (comment_id) => {
    console.log(comment_id)
    return ncNewsApi.delete(`articles/comments/${comment_id}`).then((res)=> {
        console.log(res)
        return res
    })
}