import React from 'react';
import s from './Users.module.css';
import photoUsersDefault from '../../img/Users/default-users-photo.png';
import {NavLink} from "react-router-dom";
import Preloader from "../common/preloader";
import Paginate from "./Paginate";


let Users = (props) => {

    return (<div className={s.users}>
        <h3 className={s.h_title}>Пользователи сети</h3>
        {/*Пагинация*/}
        <Paginate {...props}/>
        {/*Пользователи*/}
        {props.isFetching ? <Preloader/> :
        props.users.map((u) => {
            return (<div className={s.user} key={u.id}>
                <div className={s.title}>
                    <div className={s.photo}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : photoUsersDefault} alt='Картинка'/>
                        </NavLink>
                    </div>
                    <div className={s.following}>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {props.unfollow(u.id)}} className={s.unfollow}>Удалить из друзей</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {props.follow(u.id)}} className={s.follow}>Добавить в друзья</button>}
                    </div>
                </div>
                <div className={s.description}>
                    <div className={s.name}>
                        {u.name}
                    </div>
                    <div className={s.status}>{u.status}</div>
                </div>
                <div className={s.location}>
                        <span className={s.country}>
                            {/*{u.location.country}*/}
                        </span>
                    {/*Пробел*/}
                    ,&nbsp;
                    {/*Пробел*/}
                    <span className={s.city}>
                            {/*{u.location.city}*/}
                        </span>
                </div>
            </div>)
        })}
    </div>);
}

export default Users;