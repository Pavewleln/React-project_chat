import React, {Component} from 'react';
import s from './Header.module.css';
import logo from '../../img/logo.png';
const Header = () =>{
    return(
        <header className={s.header}>
            <img src={logo} alt=""/>
            <h1>НеВКонтакте</h1>
        </header>
    );
}
export default Header;