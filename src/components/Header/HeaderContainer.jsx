import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authLoginThunk, setAuthUserData, toggleIsFetching} from "../../redux/auth-reducer";
import Preloader from "../common/preloader";
import {compose} from "redux";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authLoginThunk()
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
export default compose(connect(mapStateToProps, {setAuthUserData, authLoginThunk}))(HeaderContainer);