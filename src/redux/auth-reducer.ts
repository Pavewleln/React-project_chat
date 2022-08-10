import {HeaderApi} from "../api/headerApi";
import {SecurityApi} from "../api/SecurityApi";

const SET_USER_DATA = 'SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'
const IS_FETCHING = 'IS_FETCHING'

export type initialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isFetching: boolean,
    isAuth: boolean,
    captchaUrl: string | null
}

let initialState: initialStateType = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action: any): initialStateType => {
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
type setAuthUserDataActionPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type setAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: setAuthUserDataActionPayloadType
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthUserDataActionType => {
    return {
        type: SET_USER_DATA, payload: {userId, email, login, isAuth}
    }
}
type getCaptchaUrlSuccessActionPayloadType ={ captchaUrl: string }
type getCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    payload: getCaptchaUrlSuccessActionPayloadType
}

export const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessActionType => {
    return {
        type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
    }
}

type toggleIsFetchingActionType = {
    type: typeof IS_FETCHING,
    isFetching: boolean
}

export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingActionType => {
    return {
        type: IS_FETCHING, isFetching
    }
}

export const authLoginThunk = () => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true));
        let data = await HeaderApi.meApi()
        if (data.resultCode === 0) {
            dispatch(toggleIsFetching(false));
            let {id, email, login} = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    }
}
export const LoginThunk = (email: string | null, password: string | null , rememberMe: boolean, captcha: any) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true));
        let response = await HeaderApi.loginApi(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(authLoginThunk());
        } else {
            if (response.data.resultCode === 10) {
                dispatch(GetCaptchaUrl());
            }
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
            return {_error: message};

        }
    }
}
export const GetCaptchaUrl = () => async (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    const response = await SecurityApi.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}
export const LogoutThunk = () => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true));
        let response = await HeaderApi.logoutApi()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
}


export default authReducer;