import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {Input} from "../common/FomrsControls/FormsControls";
import s from './login.module.css';
import {connect} from "react-redux";
import {LoginThunk} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import style from './../common/FomrsControls/FormsControls.module.css'

const LoginForm = (props) => {

    let maxLength40 = maxLengthCreator(40)

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  type="email" className={s.login + " " + (props.error ? style.formControlSummaryErrorInputs : "")} placeholder="email" name={"email"} component={Input}
                       validate={[requiredField, maxLength40]}/>
            </div>
            <div>
                <Field type="password" className={s.password + " " + (props.error ? style.formControlSummaryErrorInputs : "")} placeholder="password" name={"password"} component={Input}
                       validate={[requiredField, maxLength40]}/>
            </div>
            <div className={s.check}>
                <Field className={s.checkbox} type="checkbox" name={"rememberMe"} component={"input"}/>
                <div>Запомнить меня</div>
            </div>
            {props.error && <div className={style.formControlSummaryError}>
                {props.error}
            </div>}
            <div>
                <button className={s.submit}>Войти</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.LoginThunk(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }


    return (
        <div className={s.form}>
            <h1>Логин</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {LoginThunk})(Login);