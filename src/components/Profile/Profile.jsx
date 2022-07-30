import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileBackground from './ProfileBackground/ProfileBackground';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Preloader from "../common/preloader";
import {Navigate} from "react-router-dom";
import {updateStatus} from "../../redux/profile-reducer";

const Profile = (props) => {
    let postsElements = props.posts.map((p) => <MyPosts key={p.id} message={p.message} likes={p.likes}
                                                        dislikes={p.dislikes} profile={props.profile}/>)

    let NewPostMessage = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = NewPostMessage.current.value;
        props.updateNewPostText(text);
    }

    if (!props.profile) {
        return (
            <Preloader/>
        );
    }
    return (
        <div className={s.content}>
            <ProfileBackground
                srcImg="https://s0.rbk.ru/v6_top_pics/ampresize/media/img/3/06/755813427125063.jpg"></ProfileBackground>
            <div className={s.main}>
                <ProfileInfo alt={props.profile.fullName}
                             name={props.profile.fullName}
                             facebook={props.profile.contacts.facebook}
                             website={props.profile.contacts.website}
                             vk={props.profile.contacts.vk}
                             twitter={props.profile.contacts.twitter}
                             instagram={props.profile.contacts.instagram}
                             youtube={props.profile.contacts.youtube}
                             github={props.profile.contacts.github}
                             mainLink={props.profile.contacts.mainLink}
                             lookingForAJob={props.lookingForAJob ? "Не ищу работы" : "Ищу работу"}
                             lookingForAJobDescription={props.profile.lookingForAJobDescription}
                             srcImg={props.profile.photos.large}
                             status={props.status}
                             updateStatus={props.updateStatus}
                ></ProfileInfo>
                <div className={s.post}>
                    <h3 className={s.title}>Мои посты</h3>
                    <div className={s.container}>
                <textarea
                    placeholder='Что у тебя нового?'
                    onChange={onPostChange}
                    ref={NewPostMessage}
                    value={props.newPostText}/>
                        <button className={s.send} onClick={onAddPost}>Отправить</button>
                    </div>
                    {postsElements}
                </div>
            </div>
        </div>
    );
}
export default Profile;