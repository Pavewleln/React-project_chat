import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {createField, Input} from "../common/FomrsControls/FormsControls";
import s from './login.module.css';
import {connect} from "react-redux";
import {GetCaptchaUrl, LoginThunk} from "../../redux/auth-reducer";
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
            {props.captchaUrl && <div><img src={props.captchaUrl}/>{createField(null, "captcha", [requiredField], Input, {})}</div>}
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

class Login extends Component {
    render() {

        const onSubmit = (formData) => {
            this.props.LoginThunk(formData.email, formData.password, formData.rememberMe, formData.captcha)
        }

        if (this.props.isAuth) {
            return <Navigate to={'/profile'}/>
        }


        return (
            <div className={s.form}>
                <h1>Логин</h1>
                <LoginReduxForm onSubmit={onSubmit} captchaUrl={this.props.captchaUrl}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})


export default connect(mapStateToProps, {LoginThunk})(Login);