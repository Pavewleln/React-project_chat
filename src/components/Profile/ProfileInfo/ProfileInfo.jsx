import React, {Component} from 'react';
import s from './ProfileInfo.module.css';
import Status from "./Status/status";
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
                    <li>Контакты</li>
                    <li>Facebook: {props.facebook}</li>
                    <li>website: {props.website}</li>
                    <li>vk: {props.vk}</li>
                    <li>twitter: {props.twitter}</li>
                    <li>instagram: {props.instagram}</li>
                    <li>youtube: {props.youtube}</li>
                    <li>github: {props.github}</li>
                    <li>mainLink: {props.mainLink}</li>
                    <li>Работа: {props.lookingForAJob}</li>
                    <li>Описание: {props.lookingForAJobDescription}</li>
                  </ul>
                </div>
              </div>
                <Status status={props.status} updateStatus={props.updateStatus}/>
            </div>
    );
}
export default ProfileInfo;