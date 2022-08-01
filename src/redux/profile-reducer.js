import {profileApi} from "../api/profileApi";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = "SET_STATUS";
let initialState = {
    posts: [
        {
            id: 1,
            message: "Привет! Я зарегистрировался в новом крутом Мессенджере! Называется НеВКонтакте. Очень креативно и необычно. Никогда такого не видел",
            likes: '23',
            dislikes: '3'
        },
        {
            id: 2,
            message: "Я не сказал самое главное. Знаете кто создал это приложение на React?",
            likes: '16',
            dislikes: '13'
        },
        {
            id: 3,
            message: "Я",
            likes: '100',
            dislikes: '0'
        }
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: action.NewPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

export const addPost = (NewPostText) => ({type: ADD_POST, NewPostText})
export const setUserProfile = (profile) =>
    ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) =>
    ({type: SET_STATUS, status})

export const profileInfoThunk = (id) => {
    return (dispatch) => {
        profileApi.profileInfo(id)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}
export const getStatus = (id) => {
    return (dispatch) => {
        profileApi.getStatus(id)
            .then(response => {
                dispatch(setStatus(response.data))
            })
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileApi.updateStatus(status)
            .then(response => {
                if(response.data.resultCode === 0){
                    dispatch(setStatus(status))
                }
            })
    }
}

export default profileReducer;