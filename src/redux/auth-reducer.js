import {HeaderApi} from "../api/headerApi";

const SET_USER_DATA = 'SET_USER_DATA'
const IS_FETCHING = 'IS_FETCHING'

let initialState = {
    userid: null, email: null, login: null, isFetching: false, isAuth: false,


}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.data, isAuth: true,
            }
    }
    return state;
}

export const setAuthUserData = (userId, email, login) => {
    return {
        type: SET_USER_DATA, data: {userId, email, login}
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: IS_FETCHING, isFetching
    }
}

export const authLoginThunk = () =>{
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        HeaderApi.loginApi()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(toggleIsFetching(false));
                    let {userId, email, login} = data.data;
                    dispatch(setAuthUserData(userId, email, login));
                }
            });
    }

}

export default authReducer;