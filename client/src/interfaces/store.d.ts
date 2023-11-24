import { AuthState } from "./auth";
import { AlertState } from "./alert";
import { PostState } from "./post";

export interface State {
    auth: AuthState,
    alert: AlertState,
    posts: PostState
}