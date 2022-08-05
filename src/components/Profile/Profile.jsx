import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileBackground from './ProfileBackground/ProfileBackground';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Preloader from "../common/preloader";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {Textarea} from "../common/FomrsControls/FormsControls";

const Profile = (props) => {
    let postsElements = props.posts.map((p) => <MyPosts key={p.id} message={p.message} likes={p.likes}
                                                        dislikes={p.dislikes} profile={props.profile}/>)

    let onAddPost = (values) => {
        props.addPost(values.NewPostText);
    };

    if (!props.profile) {
        return (<Preloader/>);
    }

    let maxLength300 = maxLengthCreator(300)


    const AddNewPostText = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div className={s.postInput}>
                    <Field component={Textarea} validate={[requiredField, maxLength300]} name="NewPostText" placeholder='Что у тебя нового?'/>
                    <button className={s.send}>Отправить</button>
                </div>
            </form>
        )
    }

    const AddNewPostTextReduxForm = reduxForm({form:"profileNewPost"})(AddNewPostText)

    return (<div className={s.content}>
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
                         isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
            ></ProfileInfo>
            <div className={s.post}>
                <h3 className={s.title}>Мои посты</h3>
                <AddNewPostTextReduxForm onSubmit={onAddPost}/>
                {postsElements}
            </div>
        </div>
    </div>);
}

export default Profile;