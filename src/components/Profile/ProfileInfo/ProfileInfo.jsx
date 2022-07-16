import React, {Component} from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) =>{
    return(
        <div className={s.profile}>
              <div className={s.avatar}>
                <img src={props.srcImg} alt={props.alt}/>
              </div>
              <div className={s.description}>
                <div className={s.name}>
                  {props.name}
                </div>
                <div className={s.data}>
                  <ul>
                    <li>Дата рождения:{props.data}</li>
                    <li>Город: {props.city}</li>
                    <li>Образование: {props.education}</li>
                    <li>Хобби: {props.hobby}</li>
                  </ul>
                </div>
              </div>
            </div>
    );
}
export default ProfileInfo;