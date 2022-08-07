import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import StatusWithHooks from "./Status/statusWithHooks";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileData/ProfileDataForm";

const ProfileInfo = (props, {profile}) => {

    const onMainProfilePhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    let [editMode, setEditMode] = useState(false);

    const activateEditMode = () =>{
        setEditMode(true);
    }

    const deActivateEditMode = () =>{
        setEditMode(false);
    }

    const onSubmit = (formData) =>{
        props.saveProfile(formData).then(() =>{
            deActivateEditMode();
        })
    }

    return (
        <div className={s.profile}>
            <div className={s.avatar}>
                <img src={props.srcImg} alt={props.alt}/>
                {props.isOwner
                    ? <div className={s.downloadFile}>
                        <input className={s.downloadInput} type="file" name="file" id="inputfile"
                               onChange={onMainProfilePhotoSelected}/>
                        <label className={s.downloadLabel} htmlFor="inputfile">Загрузить фото</label>
                    </div>
                    : ""}
            </div>
            {!editMode
                ? <div>
                    <ProfileData profile={profile} {...props}/>
                    {props.isOwner ? <button className={s.buttonProfile} onClick={activateEditMode}>Обновить профиль</button> : ""}
                    </div>
                : <div>
                    <ProfileDataForm profile={profile} onSubmit={onSubmit}/>
                    <button className={s.buttonProfile} onClick={deActivateEditMode}>Выйти из режима редактирования</button>
                </div>
            }
            <StatusWithHooks status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner}/>
        </div>
    );
}
export default ProfileInfo;