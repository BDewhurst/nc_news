import axios from "axios"

const ncNewsApi = axios.create ({
    baseURL: "https://nc-news-ul5y.onrender.com/api"
})

export const getAllArticles = (order, sort_by, topic, limit, page) => {
    const params = {};

    if (order) {
      params.order = order;
    }
    if (sort_by) {
      params.sort_by = sort_by;
    }
    if (topic) {
        params.topic = topic; 
    }
    if (page) {
        params.p = page
    }
    if (limit) {
        params.limit = limit
    }
    return ncNewsApi.get("/articles", {
        params: params, 
      }).then((res)=> {
        return res.data.articles;
      });
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
    return ncNewsApi.delete(`articles/comments/${comment_id}`).then((res)=> {
        return res
    })
}

export const voteOnCommentById = (comment_id, votes) => {
return ncNewsApi.patch(`/comments/${comment_id}`, {"inc_vote": votes}).then((res)=> {
return res.data
})
}