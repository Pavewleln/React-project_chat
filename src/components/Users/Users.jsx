import React from 'react';
import s from './Users.module.css';
import * as axios from "axios";
import photoUsersDefault from '../../img/Users/default-users-photo.png';


const Users = (props) => {

    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)})


    }

    return <div className={s.users}>
        <h3 className={s.h_title}>Пользователи сети</h3>
        {props.users.map((u) => {
            return (
                <div className={s.user} key={u.id}>
                    <div className={s.title}>
                        <div className={s.photo}>
                            <img src={u.photos.small != null ? u.photos.small : photoUsersDefault} alt='Картинка'/>
                        </div>
                        <div className={s.following}>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }} className={s.follow}>Добавить в друзья</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }} className={s.unfollow}>Удалить из друзей</button>
                            }
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
    </div>
}

export default Users;