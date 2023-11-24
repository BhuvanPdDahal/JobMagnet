import { Dispatch } from 'redux';

import * as api from '../api';
import { JobForm } from '../interfaces/post';
import { Action } from '../interfaces/post';
import { showAlert } from './alert';
import handleError from '../functions/error';
import { START_LOADING, END_LOADING, CREATE_POST, GET_ALL_POSTS, GET_POST_BY_ID, REMOVE_SELECTED_POST, SEARCH_POST } from '../constants/actionTypes';

export const createPost = (formData: JobForm, navigate: any) => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.createPost(formData);
        dispatch({ type: CREATE_POST, data });
        dispatch({ type: END_LOADING });
        showAlert("Post created successfully", "success", dispatch);
        navigate('/jobs');

    } catch (error) {
        console.log(error);
        dispatch({ type: END_LOADING });
        handleError(error, dispatch);
    }
};

export const getAllPosts = () => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.getAllPosts();
        dispatch({ type: GET_ALL_POSTS, data: data.posts });
        dispatch({ type: END_LOADING });

    } catch (error) {
        console.log(error);
        dispatch({ type: END_LOADING });
        handleError(error, dispatch);
    }
};

export const getPostById = (id: string) => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.getPostById(id);
        dispatch({ type: GET_POST_BY_ID, data });
        dispatch({ type: END_LOADING });

    } catch (error) {
        console.log(error);
        dispatch({ type: REMOVE_SELECTED_POST });
        dispatch({ type: END_LOADING });
        handleError(error, dispatch);
    }
};

export const searchPost = (searchFor: string, searchValue: string) => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.searchPost(searchFor, searchValue);
        dispatch({ type: SEARCH_POST, data: data.posts });
        dispatch({ type: END_LOADING });

    } catch (error) {
        console.log(error);
        dispatch({ type: END_LOADING });
        handleError(error, dispatch);
    }
};