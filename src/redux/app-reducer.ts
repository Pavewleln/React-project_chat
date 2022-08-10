import {authLoginThunk} from "./auth-reducer";

const SET_INITIALIZED_SUCCESS = 'SET_INITIALIZED_SUCCESS'

export type initialStateType = {
    initialized: boolean
}

let initialState: initialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
    }
    return state;
}

type initializedSuccessType = {
    type: typeof SET_INITIALIZED_SUCCESS
}

export const initializedSuccess = (): initializedSuccessType => {
    return {
        type: SET_INITIALIZED_SUCCESS
    }
}

export const initializeAppThunk = () => async (dispatch: any) => {
    let promise = dispatch(authLoginThunk());
    await Promise.all([promise])
    dispatch(initializedSuccess());
}
export default appReducer;