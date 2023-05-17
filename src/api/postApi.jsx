import axios from "axios"



export const fetchPosts = async () => {
    return await axios.get('http://localhost:3000/posts').then(res => res.data)
}

export const fetchPost = async (id) => {
    return await axios.get(`http://localhost:3000/posts/${id}`).then(res => res.data)
}

export const fetchUser = async (id) => {
    return await axios.get(`http://localhost:4000/users/${id}`).then(res => res.data)
}

export const createPost = async (newPost) => {
    return axios.post('http://localhost:3000/posts', newPost).then(res => res.data)
}

export const fetchDeletePost = async (id) => {
    return axios.delete(`http://localhost:3000/posts/${id}`)
} 