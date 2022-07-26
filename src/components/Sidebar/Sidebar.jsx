import React, {Component} from 'react';
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {
    return (
        <div className={s.sidebar}>
            <ul>
                <li className={s.link}><NavLink to='/profile' className=
                    {({isActive}) => isActive ? s.active : s.inactive}
                >Профиль</NavLink></li>
                <li className={s.link}><NavLink to='/dialogs' className=
                    {({isActive}) => isActive ? s.active : s.inactive}
                >Сообщения</NavLink></li>
                <li className={s.link}><NavLink to='/news' className=
                    {({isActive}) => isActive ? s.active : s.inactive}
                >Новости</NavLink></li>
                <li className={s.link}><NavLink to='/music' className=
                    {({isActive}) => isActive ? s.active : s.inactive}
                >Музыка</NavLink></li>
                <li className={s.link}><NavLink to='/users' className=
                    {({isActive}) => isActive ? s.active : s.inactive}
                >Пользователи</NavLink></li>
                <li className={s.link}><NavLink to='/settings' className=
                    {({isActive}) => isActive ? s.active : s.inactive}
                >Настройки</NavLink></li>
            </ul>
        </div>
    );
}
export default Sidebar;