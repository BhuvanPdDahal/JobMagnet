import { Action } from '../interfaces/alert';
import { SHOW_ALERT, HIDE_ALERT } from '../constants/actionTypes';

const errorReducer = (alert = { message: '', type: '', show: false }, action: Action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return { message: action?.message, type: action?.alertType, show: true };
        case HIDE_ALERT:
            return { message: '', type: '', show: false };
        default:
            return alert;
    }
};

export default errorReducer;