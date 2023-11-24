import axios from 'axios';

import { FormDataProp } from '../interfaces/auth';
import { JobForm } from '../interfaces/post';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

API.interceptors.request.use((req) => {
    const userProfileJson = localStorage.getItem('userProfileJobMagnet');

    if (userProfileJson) {
        const userProfile = JSON.parse(userProfileJson);
        
        if (userProfile && userProfile.token) {
            req.headers.authorization = `Bearer ${userProfile.token}`;
        }
    }
    return req;
});

export const signup = (formData: FormDataProp) => API.post('/users/signup', formData);
export const login = (formData: FormDataProp) => API.post('/users/login', formData);
export const getUserById = (id: string) => API.get(`/users/${id}`);
export const searchUser = (searchFor: string, value: string) => API.get(`/users/search?${searchFor}=${value}`);

export const createPost = (formData: JobForm) => API.post('/posts', formData);
export const getAllPosts = () => API.get('/posts');
export const getAllUsers = () => API.get('/users');
export const getPostById = (id: string) => API.get(`/posts/${id}`);
export const searchPost = (searchFor: string, value: string) => API.get(`/posts/search?${searchFor}=${value}`);