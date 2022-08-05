import React, {Component} from 'react';
import s from './ProfileInfo.module.css';
import StatusWithHooks from "./Status/statusWithHooks";
const ProfileInfo = (props) =>{

  const onMainProfilePhotoSelected = (e) =>{
    if(e.target.files.length){
        props.savePhoto(e.target.files[0]);
    }
}

    return(
        <div className={s.profile}>
              <div className={s.avatar}>
                <img src={props.srcImg} alt={props.alt}/>
                {props.isOwner
                    ? <div className={s.downloadFile}>
                        <input className={s.downloadInput} type="file" name="file" id="inputfile" onChange={onMainProfilePhotoSelected}/>
                        <label className={s.downloadLabel} htmlFor="inputfile">Загрузить фото</label>
                    </div>
                    : ""}
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
                <StatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
    );
}
export default ProfileInfo;