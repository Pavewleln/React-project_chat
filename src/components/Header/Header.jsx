import React, {Component} from 'react';
import s from './Header.module.css';
import logo from '../../img/logo.png';
import {NavLink} from "react-router-dom";
const Header = (props) =>{
    return(
        <header className={s.header}>
            <div className={s.headerBlock}>
                <img src={logo} alt=""/>
                <h1>НеВКонтакте</h1>
            </div>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink className={s.item} to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}
export default Header;