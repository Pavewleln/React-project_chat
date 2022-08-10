import {UsersApi} from "../api/usersApi";
import {photosType} from "../types/photosType";
import { usersType } from "../types/types";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET USERS'
const CURRENT_PAGE = 'CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'



let initialState = {
    users: [] as Array<usersType>,
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>, // array of users id
}

type initialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        case SET_USERS:
            return {...state, users: action.users}
        case CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id != action.userId)
            }

    }
    return state;
}

type followSuccessType = {type: typeof FOLLOW, userId: number}
export const followSuccess = (userId: number):followSuccessType => ({type: FOLLOW, userId})

type unfollowSuccessType = {type: typeof UNFOLLOW, userId: number}
export const unfollowSuccess = (userId: number): unfollowSuccessType => ({type: UNFOLLOW, userId})

type setUsersType = {type: typeof SET_USERS, users: Array<usersType>}
export const setUsers = (users: Array<usersType>): setUsersType => ({type: SET_USERS, users})

type setCurrentPageType = {type: typeof CURRENT_PAGE, currentPage: number}
export const setCurrentPage = (currentPage: number): setCurrentPageType => ({type: CURRENT_PAGE, currentPage})

type setTotalUsersCountType = {type: typeof SET_TOTAL_USERS_COUNT, count: number}
export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountType => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})

type toggleIsFetchingType = {type: typeof TOGGLE_IS_FETCHING, isFetching: boolean}
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching})

type toggleFollowingProgressType = {type: typeof TOGGLE_IS_FOLLOWING_PROGRESS, isFetching: boolean, userId: number}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): toggleFollowingProgressType => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const getUsersThunk = (currentPage: number, pageSize: number) => {
    return async (dispatch:any) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage))
        let data = await UsersApi.getUsersApi(currentPage, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}
export const onPageChangedThunk = (pageNumber: number, pageSize: number) => {
    return async (dispatch:any) =>{
        dispatch(toggleIsFetching(true));
        let data = await UsersApi.onPageChangedApi(pageNumber, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        (dispatch(setCurrentPage(pageNumber)));
    }

}
export const follow = (id: number) => {
    return async (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, id))
        let data = await UsersApi.followApi(id)
        if (data.resultCode == 0) {
            dispatch(followSuccess(id))
        }
        dispatch(toggleFollowingProgress(false, id))
    }
}
export const unfollow = (id: number) => {
    return async (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, id))
        let data = await UsersApi.unfollowApi(id)
        if (data.resultCode == 0) {
            dispatch(unfollowSuccess(id))
        }
        dispatch(toggleFollowingProgress(false, id))
    }
}

export default usersReducer;