import { Dispatch } from 'redux';

import { Action } from '../interfaces/auth';
import { SHOW_ALERT, HIDE_ALERT } from '../constants/actionTypes';

export const showAlert = (message: string, alertType: string, dispatch: Dispatch<Action>) => {
    dispatch({ type: SHOW_ALERT, message, alertType });
    setTimeout(() => dispatch({ type: HIDE_ALERT }), 3000);
}