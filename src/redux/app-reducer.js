import {authLoginThunk} from "./auth-reducer";

const SET_INITIALIZED_SUCCESS = 'SET_INITIALIZED_SUCCESS'

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS:
            return {
                ...state, initialized: true
            }
    }
    return state;
}

export const initializedSuccess = () => {
    return {
        type: SET_INITIALIZED_SUCCESS
    }
}

export const initializeAppThunk = () => async (dispatch) => {
    let promise = dispatch(authLoginThunk());
    await Promise.all([promise])
    dispatch(initializedSuccess());
}
export default appReducer;