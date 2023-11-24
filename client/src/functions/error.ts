import { AxiosError } from 'axios';
import { Dispatch } from 'redux';

import { showAlert } from "../actions/alert";
import { Action as AuthAction } from '../interfaces/auth';
import { Action as PostAction } from '../interfaces/post';

function isAxiosError(error: any): error is AxiosError {
    return error.isAxiosError === true;
}

const handleError = (error: any, dispatch: Dispatch<AuthAction | PostAction>) => {
    if (isAxiosError(error)) {
        let errorMessage = "An error occurred";
        if (error?.response?.data && typeof error.response.data === 'object' && 'message' in error.response.data) {
            if(typeof error.response.data.message === "string") errorMessage = error.response.data.message;
        }
        showAlert(errorMessage, "error", dispatch);
    }
};

export default handleError;