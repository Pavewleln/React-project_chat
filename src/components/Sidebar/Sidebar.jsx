import React, {Component} from 'react';
import s from './Sidebar.module.css';

const Sidebar = () =>{
    return(
        <div className={s.sidebar}>
          <ul>
            <li className={s.link}><a href='#' className={`${s.item} ${s.active}`}>Профиль</a></li>
            <li className={s.link}><a href='#' className={s.item}>Сообщения</a></li>
            <li className={s.link}><a href='#' className={s.item}>Новости</a></li>
            <li className={s.link}><a href='#' className={s.item}>Музыка</a></li>
            <li className={s.link}><a href='#' className={s.item}>Настройки</a></li>
          </ul>
        </div>
    );
}
export default Sidebar;