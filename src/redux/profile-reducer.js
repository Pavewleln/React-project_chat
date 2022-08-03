import {profileApi} from "../api/profileApi";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

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
    status: '',
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
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            }
        }
        default:
            return state;
    }
}

export const addPost = (NewPostText) => ({type: ADD_POST, NewPostText})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const setUserProfile = (profile) =>
    ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) =>
    ({type: SET_STATUS, status})

export const profileInfoThunk = (id) => {
    return async (dispatch) => {
        let data = await profileApi.profileInfo(id)
        dispatch(setUserProfile(data))
    }
}
export const getStatus = (id) => {
    return async (dispatch) => {
        let response = await profileApi.getStatus(id)
        dispatch(setStatus(response.data))
    }
}
export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await profileApi.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}

export default profileReducer;