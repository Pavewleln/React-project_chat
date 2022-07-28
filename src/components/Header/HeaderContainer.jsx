import React, {Component} from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData, toggleIsFetching} from "../../redux/auth-reducer";
import Preloader from "../common/preloader";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.toggleIsFetching(false);
                    let {userId, email, login} = response.data.data;
                    this.props.setAuthUserData(userId, email, login);
                }
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : <Header {...this.props}/>}
        </>
    }

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth, login: state.auth.login, isFetching: state.auth.isFetching,
})

export default connect(mapStateToProps, {setAuthUserData, toggleIsFetching})(HeaderContainer);