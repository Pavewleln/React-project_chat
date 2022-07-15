import React, {Component} from 'react';
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = (props) =>{
    return(
        <div className={s.sidebar}>
          <ul>
            <li className={s.link}><NavLink to='/Profile' className=
                {({ isActive }) => isActive ? s.active : s.inactive}
                >Профиль</NavLink></li>
            <li className={s.link}><NavLink to='/Dialogs' className=
                {({ isActive }) => isActive ? s.active : s.inactive}
                >Сообщения</NavLink></li>
            <li className={s.link}><NavLink to='/News' className=
                {({ isActive }) => isActive ? s.active : s.inactive}
            >Новости</NavLink></li>
            <li className={s.link}><NavLink to='/Music' className=
                {({ isActive }) => isActive ? s.active : s.inactive}
            >Музыка</NavLink></li>
            <li className={s.link}><NavLink to='/Settings' className=
                {({ isActive }) => isActive ? s.active : s.inactive}
            >Настройки</NavLink></li>
          </ul>
        </div>
    );
}
export default Sidebar;