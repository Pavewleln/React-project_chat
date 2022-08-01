import {HeaderApi} from "../api/headerApi";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'
const IS_FETCHING = 'IS_FETCHING'

let initialState = {
    userId: null, email: null, login: null, isFetching: false, isAuth: false,


}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.payload
            }
    }
    return state;
}

export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA, payload: {userId, email, login, isAuth}
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: IS_FETCHING, isFetching
    }
}

export const authLoginThunk = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        HeaderApi.meApi()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(toggleIsFetching(false));
                    let {id, email, login} = data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                }
            });
    }
}
export const LoginThunk = (email, password, rememberMe) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        HeaderApi.loginApi(email, password, rememberMe)
            .then(response => {
                        dispatch(authLoginThunk());
                    if(response.data.resultCode !== 0){
                        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                        dispatch(stopSubmit("login", {_error: message}));
                    }
            });
    }
}
export const LogoutThunk = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        HeaderApi.logoutApi()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }
            });
    }
}

export default authReducer;