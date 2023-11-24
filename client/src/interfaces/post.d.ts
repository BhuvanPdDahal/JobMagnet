import { ObjectId } from 'mongodb';

import { Action as AlertAction } from './alert';

export interface JobForm {
    title: string,
    description: string,
    tags: string[]
}

export interface JobPostProp {
    id: ObjectId,
    title: string,
    tags: string[]
}

export interface PostProp {
    _id: ObjectId,
    title: string,
    description: string,
    tags: string[],
    createdAt: string,
    creator: {
        name: string,
        id: ObjectId
    }
}

export interface PostAction {
    type: string,
    data?: PostProp | PostProp[]
}

export type Action = PostAction | AlertAction;

export interface PostState {
    isLoading: boolean,
    posts: PostProp[]
    selectedPost?: PostProp
}