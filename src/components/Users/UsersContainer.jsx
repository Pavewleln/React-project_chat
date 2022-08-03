import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {
    follow, unfollow, getUsersThunk, setCurrentPage, toggleFollowingProgress, onPageChangedThunk
} from "../../redux/users-reducer";
import Preloader from "../common/preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    geTotalUsersCount,
    getPageSize,
    getUsers
} from "../../redux/users-selectors";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
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

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: geTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)

    }
}

export default compose(connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsersThunk, onPageChangedThunk
}))(UsersAPIComponent);