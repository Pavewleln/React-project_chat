import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileBackground from './ProfileBackground/ProfileBackground';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) =>{
    let postsElements = props.posts.map((p) => <MyPosts key={p.id} message={p.message} likes={p.likes} dislikes={p.dislikes}/>)

    let NewPostMessage = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () =>{
        let text = NewPostMessage.current.value;
        props.updateNewPostText(text);
    }

    return(
        <div className={s.content}>
          <ProfileBackground srcImg="https://s0.rbk.ru/v6_top_pics/ampresize/media/img/3/06/755813427125063.jpg"></ProfileBackground>
          <div className={s.main}>
            <ProfileInfo alt="Pavel K." name="Pavel K." data="Да" city="Да" education="Да" hobby="Наверно" srcImg="https://lh3.googleusercontent.com/RGAwAq1B3lvMpLCOx3Lq9-RAl9VlxFI-_DgUvHiC6Ou36ApxoA4lXIA_MJckPnWgvhSJYiegQGi8O5ZuMJWttveEubfota0TEOHcicpV0nRfZJBTI6Sps230CAE4XIhfz4hVijG6Ky-AUzCto7jmJk8jW1fU1Zof6PJEhoWVEYXhSjZun7NL_UEGmE7hYlRD7H7sCc3hxWWFvZJTu_yIjPWe9cTrX1GdT2XTv1m8wW3Dtnu_npPddwD7m_6hpuTOlWU3KTwAsJ1qt5Fg5bfjyJXocF_ejAnesXMJMCwdAqbEJrubX0ow0gBYsh5HCRV1Eu4Sz8_hfnYv30onJJOy-pDSLnf37AGq-9oAm0piX0C_vQdiI_uqq4m6CznpR325iLZrcrwyy0YtwOBujCDI2BsehvPZL_MDhlF8g0b7VGjeOy-ICpSaWvCx2BwMEq5drSumlzW9uFGZE8jQU-vjwzHxm5ElEtERiIzd7paUNYYJSAiMNKVHvCZnIjd6WAPh34V13Za2L5HQhZ3sFfxWQsFvfeEe45Tq3Xdxna2Lu_BvnC8lfCu1jjU4dIzyj944yv9Bd4jABC9T6qGhJVQDzb34j5XFxhDEHCLh5Q4OJ5Tmu4U9b3AAwyBJKaAHN8i5W0ZdPC1XXVYRVYxP_4bwh30vOPf0kKIq5gsL33toZwIOxK7rwmt6jkVrpzjx8bEeDQvUqXLZGL39hb9esMcgLkV8a6dBFtSyImJUqAPhB0Wcph0rZ_h8kOHYUogdBA=w531-h716-no?authuser=0"></ProfileInfo>
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