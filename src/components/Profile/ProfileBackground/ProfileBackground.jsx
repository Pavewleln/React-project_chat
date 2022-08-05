import React, {Component} from 'react';
import s from './ProfileBackground.module.css';

const ProfileBackground = (props) =>{
    return(
        <div className={s.top}>
            <img src={props.srcImg} alt=""/>
        </div>
    );
}
export default ProfileBackground;