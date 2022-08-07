import {HeaderApi} from "../api/headerApi";
import {stopSubmit} from "redux-form";
import {SecurityApi} from "../api/SecurityApi";

const SET_USER_DATA = 'SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'
const IS_FETCHING = 'IS_FETCHING'

let initialState = {
    userId: null, email: null, login: null, isFetching: false, isAuth: false, captchaUrl: null


}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.payload
            }
        case GET_CAPTCHA_URL_SUCCESS:
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
export const getCaptchaUrlSuccess = (captchaUrl) => {
    return {
        type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: IS_FETCHING, isFetching
    }
}

export const authLoginThunk = () => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let data = await HeaderApi.meApi()
        if (data.resultCode === 0) {
            dispatch(toggleIsFetching(false));
            let {id, email, login} = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    }
}
export const LoginThunk = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let response = await HeaderApi.loginApi(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(authLoginThunk());
        } else {
            if (response.data.resultCode === 10) {
                dispatch(GetCaptchaUrl());
            }
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
            dispatch(stopSubmit("login", {_error: message}));

        }
    }
}
export const GetCaptchaUrl = () => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const response = await SecurityApi.getCaptchaUrl()
    const captchaUrl = response.data.url

    dispatch(getCaptchaUrlSuccess(captchaUrl));
}
export const LogoutThunk = () => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let response = await HeaderApi.logoutApi()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
}


export default authReducer;