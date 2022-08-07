import s from './login.module.css';
import {connect} from "react-redux";
import {LoginThunk} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import {useForm} from "react-hook-form";

const LoginForm = (props) => {

    const {
        handleSubmit,
        register,
        formState: {
            errors
        }
    } = useForm({
        mode: "onSubmit"
    })

    const onSubmit = (formData) => {
        props.LoginThunk(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            Логин
            <div>
                <input className={s.login} {...register('email', {required: true})} type="email" placeholder="email"/>
                {errors?.email && <span> {errors.email.message || "error!"}</span>}
            </div>
            <div>
                <input className={s.password} {...register('password', {required: true})} type="password" placeholder="password"/>
                {errors?.email && <span> {errors.email.message || "error!"}</span>}
            </div>
            <div className={s.check}>
                <input {...register('rememberMe', {required: false})} className={s.checkbox} type="checkbox"/>
                <div>Запомнить меня</div>
            </div>
            {props.captchaUrl &&
                <div>
                    <img src={props.captchaUrl}/>
                    <input className={s.captcha} {...register('captcha', {required: true})} type='text'/>
                </div>}
            <div>
                <button className={s.submit}>Войти</button>
            </div>
        </form>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})


export default connect(mapStateToProps, {LoginThunk})(LoginForm);