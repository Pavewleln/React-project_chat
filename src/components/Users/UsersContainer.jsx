import React from 'react';
import s from './Users.module.css';
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

const UsersContainer = (props) =>{
    return(
        <div className={s.title}>

        </div>
    );
}

let mapStateToProps = (state) =>{
    return{
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        follow: (userId) =>{
            dispatch(followAC(userId))
        },
        unfollow: (userId) =>{
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) =>{
            dispatch(setUsersAC(users))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);