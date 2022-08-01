import {HeaderApi} from "../api/headerApi";
import {stopSubmit} from "redux-form";
import {authLoginThunk} from "./auth-reducer";

const SET_INITIALIZED_SUCCESS = 'SET_INITIALIZED_SUCCESS'
const INITIALIZE = 'INITIALIZE'

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

export const initializeAppThunk = () => (dispatch) => {
    let promise = dispatch(authLoginThunk());

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });
}
export default appReducer;