import axios from 'axios';

export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POST = "CREATE_POST";
export const FETCH_POST = "FETCH_POST";
export const DELETE_POST = "DELETE_POST";
export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const ADD_COMMENT = "ADD_COMMENT";

const ROOT_URL='http://localhost:4000';

export function fetchPosts() {

    const request = axios.get(`${ROOT_URL}/posts/`);

    return {
        type: FETCH_POSTS,
        payload: request

    };
}

export function addComment(props) {
    const request = axios.post(`${ROOT_URL}/comments`,props);
    return {
        type: ADD_COMMENT,
        payload: request
    }
}

export function createPost(props) {
    const request = axios.post(`${ROOT_URL}/posts`,props);
    return {
        type: CREATE_POST,
        payload: request
    }
}

export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}`);
    return {
        type: FETCH_POST,
        payload: request
    }
}

export function deletePost(id) {
    const request = axios.delete(`${ROOT_URL}/posts/${id}`)
    return {
        type: DELETE_POST,
        payload: request
    }
}

export function fetchComments(id) {
    const request = axios.get(`${ROOT_URL}/comments?postId=${id}`);
    
    return {
        type: FETCH_COMMENTS,
        payload: request
    }
}

export function deleteComment(id) {
    const request = axios.delete(`${ROOT_URL}/comments/${id}`)
    return {
        type: DELETE_COMMENT,
        payload: request
    }
}