import { PostAction } from "../interfaces/post";
import { START_LOADING, END_LOADING, CREATE_POST, SEARCH_POST, GET_ALL_POSTS, GET_POST_BY_ID, REMOVE_SELECTED_POST } from '../constants/actionTypes';

const postReducer = (state = { posts: [], isLoading: true }, action: PostAction) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case CREATE_POST:
            return { ...state, posts: [...[action?.data], ...state.posts] };
        case SEARCH_POST:
        case GET_ALL_POSTS:
            return { ...state, posts: action?.data };
        case GET_POST_BY_ID:
            return { ...state, selectedPost: action?.data };
        case REMOVE_SELECTED_POST:
            return { ...state, selectedPost: null };
        default:
            return state;
    }
};

export default postReducer;