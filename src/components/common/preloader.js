import React from 'react';
import preloader from '../../img/Users/preloader-users.gif';
import s from './preloader.module.css';

function Preloader(props) {
    return (
        <div  className={s.loading} >
            <img src={preloader}/>
        </div>
    );
}

export default Preloader;