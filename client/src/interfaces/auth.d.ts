import { ObjectId } from 'mongodb';
import { Dispatch } from 'react';

import { Action as AlertAction } from './alert';

export interface FormDataProp {
    firstName: string,
    lastName: string,
    skills: string[] | string,
    email: string,
    password: string,
    continent: string
}

export interface FreelancerProp {
    _id: ObjectId,
    name: string,
    createdAt: string,
    skills: string[]
}

export interface AuthAction {
    type: string;
    data?: {
        token: string,
        user: {
            _id: ObjectId,
            firstName: string,
            lastName: string,
            email: string,
            password: string,
            status: string,
            jobPosts: string[],
            jobRequests: string[]
        }
    }
}

export type Action = AuthAction | AlertAction;

export interface AuthState {
    isLoading: string,
    authData: {
        user: typeof AuthAction.data,
        token: string
    },
    users: (AuthAction.data.user)[],
    selectedProfile?: typeof AuthAction.data.user
}