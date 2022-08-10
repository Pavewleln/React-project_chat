import {profileApi} from "../api/profileApi";
import {photosType} from "../types/photosType";
import {postsType, profileType} from "../types/types";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SET_PHOTO_SUCCESS = "SET_PHOTO_SUCCESS";


let initialState = {
    posts: [
        {
            id: 1,
            message: "Привет! Я зарегистрировался в новом крутом Мессенджере! Называется НеВКонтакте. Очень креативно и необычно. Никогда такого не видел",
            likesCount: 23,
            dislikesCount: 3
        },
        {
            id: 2,
            message: "Я не сказал самое главное. Знаете кто создал это приложение на React?",
            likesCount: 16,
            dislikesCount: 13
        },
        {
            id: 3,
            message: "Я",
            likesCount: 100,
            dislikesCount: 0
        }
    ] as Array<postsType>,
    profile: null as profileType | null,
    status: '',
    newPostText: ''
};

export type initialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): initialStateType => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: action.NewPostText,
                likesCount: 0,
                dislikesCount: 0
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
        case SET_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as profileType
            }
        }
        default:
            return state;
    }
}
type addPostType = { type: typeof ADD_POST, NewPostText: string }
export const addPost = (NewPostText: string): addPostType => ({type: ADD_POST, NewPostText})

type deletePostType = { type: typeof DELETE_POST, postId: number }
export const deletePost = (postId: number): deletePostType => ({type: DELETE_POST, postId})

type setUserProfileType = { type: typeof SET_USER_PROFILE, profile: profileType }
export const setUserProfile = (profile: profileType): setUserProfileType => ({type: SET_USER_PROFILE, profile})

type setStatusType = { type: typeof SET_STATUS, status: string }
export const setStatus = (status: string): setStatusType => ({type: SET_STATUS, status})

type setPhotoSuccessType = { type: typeof SET_PHOTO_SUCCESS, photos: photosType }
export const setPhotoSuccess = (photos: photosType): setPhotoSuccessType => ({type: SET_PHOTO_SUCCESS, photos})

export const profileInfoThunk = (id: number) => {
    return async (dispatch: any) => {
        let data = await profileApi.profileInfo(id)
        dispatch(setUserProfile(data))
    }
}
export const getStatus = (id: number) => {
    return async (dispatch: any) => {
        let response = await profileApi.getStatus(id)
        dispatch(setStatus(response.data))
    }
}
export const updateStatus = (status: string) => {
    return async (dispatch: any) => {
        let response = await profileApi.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}
export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileApi.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(setPhotoSuccess(response.data.data.photos))
    }
}
export const saveProfile = (profile: profileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId
    let response = await profileApi.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(profileInfoThunk(userId))
    }
}

export default profileReducer;