import React, {Component} from 'react';
import s from './Header.module.css';

const Header = () =>{
    return(
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/800px-VK_Compact_Logo_%282021-present%29.svg.png" alt=""/>
            <h1>НеВКонтакте</h1>
        </header>
    );
}
export default Header;