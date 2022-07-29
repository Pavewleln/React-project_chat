import {UsersApi} from "../api/usersApi";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET USERS'
const CURRENT_PAGE = 'CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [], pageSize: 50, totalUsersCount: 0, currentPage: 1, isFetching: false, followingInProgress: [],

}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
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

export const followSuccess = (userId) => {
    return {
        type: FOLLOW, userId
    }
}
export const unfollowSuccess = (userId) => {
    return {
        type: UNFOLLOW, userId
    }
}
export const setUsers = (users) => {
    return {
        type: SET_USERS, users
    }
}
export const setCurrentPage = (currentPage) => {
    return {
        type: CURRENT_PAGE, currentPage
    }
}
export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT, count: totalUsersCount
    }
}
export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING, isFetching
    }
}
export const toggleFollowingProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId
    }
}

export const getUsersThunk = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        UsersApi.getUsersApi(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            })
    }
}
export const onPageChangedThunk = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        UsersApi.onPageChangedApi(pageNumber, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
                (dispatch(setCurrentPage(pageNumber)));
            })
    }
}
export const follow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id))
        UsersApi.followApi(id)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(followSuccess(id))
                }
                dispatch(toggleFollowingProgress(false, id))
            })
    }
}
export const unfollow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id))
        UsersApi.unfollowApi(id)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(unfollowSuccess(id))
                }
                dispatch(toggleFollowingProgress(false, id))
            })
    }
}

export default usersReducer;