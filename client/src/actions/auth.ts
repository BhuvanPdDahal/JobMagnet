import { Dispatch } from 'redux';

import * as api from '../api';
import { showAlert } from './alert';
import { FormDataProp } from '../interfaces/auth';
import { Action } from '../interfaces/auth';
import handleError from '../functions/error';
import { START_LOADING, END_LOADING, SIGNUP, LOGIN, GET_ALL_USERS, GET_USER_BY_ID, REMOVE_SELECTED_PROFILE, SEARCH_USER } from '../constants/actionTypes';

export const signup = (formData: FormDataProp, navigate: any) => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.signup(formData);
        dispatch({ type: SIGNUP, data });
        dispatch({ type: END_LOADING });
        showAlert("Account created successfully", "success", dispatch);
        navigate('/');
        
    } catch (error) {
        console.log(error);
        dispatch({ type: END_LOADING });
        handleError(error, dispatch);
    }
};

export const login = (formData: FormDataProp, navigate: any) => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.login(formData);
        dispatch({ type: LOGIN, data });
        dispatch({ type: END_LOADING });
        showAlert("Logged in successfully", "success", dispatch);
        navigate('/');

    } catch (error) {
        console.log(error);
        dispatch({ type: END_LOADING });
        handleError(error, dispatch);
    }
};

export const getAllUsers = () => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.getAllUsers();
        dispatch({ type: GET_ALL_USERS, data: data.users });
        dispatch({ type: END_LOADING });

    } catch (error) {
        console.log(error);
        dispatch({ type: END_LOADING });
        handleError(error, dispatch);
    }
};

export const getUserById = (id: string) => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.getUserById(id);
        dispatch({ type: GET_USER_BY_ID, data });
        dispatch({ type: END_LOADING });

    } catch (error) {
        console.log(error);
        dispatch({ type: REMOVE_SELECTED_PROFILE });
        dispatch({ type: END_LOADING });
        handleError(error, dispatch);
    }
};

export const searchUser = (searchFor: string, searchValue: string) => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.searchUser(searchFor, searchValue);
        dispatch({ type: SEARCH_USER, data: data.users });
        dispatch({ type: END_LOADING });

    } catch (error) {
        console.log(error);
        dispatch({ type: END_LOADING });
        handleError(error, dispatch);
    }
};