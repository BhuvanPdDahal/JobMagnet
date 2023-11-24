import { AuthAction } from '../interfaces/auth';
import { START_LOADING, END_LOADING, SIGNUP, LOGIN, GET_ALL_USERS, SEARCH_USER, GET_USER_BY_ID, REMOVE_SELECTED_PROFILE, LOGOUT } from '../constants/actionTypes'

const authReducer = (state = { authData: JSON.parse(localStorage.getItem('userProfileJobMagnet') || 'null'), users: [], isLoading: false }, action: AuthAction) => {
    switch(action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case SIGNUP:
        case LOGIN:
            localStorage.setItem('userProfileJobMagnet', JSON.stringify(action?.data));
            return { ...state, authData: action?.data };
        case SEARCH_USER:
        case GET_ALL_USERS:
            return { ...state, users: action?.data };
        case GET_USER_BY_ID:
            return { ...state, selectedProfile: action?.data };
        case REMOVE_SELECTED_PROFILE:
            return { ...state, selectedProfile: null };
        case LOGOUT:
            localStorage.removeItem('userProfileJobMagnet');
            return { ...state, authData: null };
        default:
            return state;
    }
};

export default authReducer;