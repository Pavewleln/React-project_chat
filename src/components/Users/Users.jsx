import React from 'react';
import s from './Users.module.css';
import * as axios from "axios";
import photoUsersDefault from '../../img/Users/default-users-photo.png';


class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div className={s.users}>
                <h3 className={s.h_title}>Пользователи сети</h3>
                <div className={s.pagination}>
                    {pages.map(p => {
                        return (
                            <span key={p.id} className={this.props.currentPage === p && s.checked} onClick={(e) => {
                                this.onPageChanged(p)
                            }}>{p}</span>
                        );
                    })}
                </div>
                {this.props.users.map((u) => {
                    return (
                        <div className={s.user} key={u.id}>
                            <div className={s.title}>
                                <div className={s.photo}>
                                    <img src={u.photos.small != null ? u.photos.small : photoUsersDefault}
                                         alt='Картинка'/>
                                </div>
                                <div className={s.following}>
                                    {u.followed
                                        ? <button onClick={() => {
                                            this.props.unfollow(u.id)
                                        }} className={s.follow}>Добавить в друзья</button>
                                        : <button onClick={() => {
                                            this.props.follow(u.id)
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
        );
    }
}

export default Users;