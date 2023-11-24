export interface Action {
    type: string,
    alertType: string,
    message?: string
}

export interface AlertState {
    message: string,
    type: string,
    show: boolean
}