import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {follow, unfollow, getUsersThunk, setCurrentPage, toggleFollowingProgress, onPageChangedThunk} from "../../redux/users-reducer";
import {compose} from "redux";
import {getCurrentPage, getFollowingInProgress, getIsFetching, geTotalUsersCount, getPageSize, getUsers} from "../../redux/users-selectors";
import {usersType} from "../../types/types";
import {appStateType} from "../../redux/redux-store";

type mapStateToPropsType = {
    currentPage: number
    pageSize: number
    users: Array<usersType>
    totalUsersCount: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type mapDispatchToPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    onPageChanged: (pageNumber: number) => void
    getUsersThunk: (currentPage: number, pageSize: number) => void
    onPageChangedThunk: (pageNumber: number, pageSize: number) => void
}
type ownToPropsType = {
    //empty
}
type PropsType = mapStateToPropsType & mapDispatchToPropsType & ownToPropsType

class UsersAPIComponent extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.onPageChangedThunk(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChanged={this.onPageChanged}
                isFetching={this.props.isFetching}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state: appStateType):mapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: geTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)

    }
}

export default compose(
    connect(
        mapStateToProps,
        {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsersThunk, onPageChangedThunk})
)(UsersAPIComponent);