import React from "react";
import s from './MyPosts.module.css';

const MyPosts = (props) =>{
    return(
        <div className={s.container}>
            <div className={s.block}>
                <div className={s.post}>
                    <div className={s.avatar}>
                        <img src="https://lh3.googleusercontent.com/RGAwAq1B3lvMpLCOx3Lq9-RAl9VlxFI-_DgUvHiC6Ou36ApxoA4lXIA_MJckPnWgvhSJYiegQGi8O5ZuMJWttveEubfota0TEOHcicpV0nRfZJBTI6Sps230CAE4XIhfz4hVijG6Ky-AUzCto7jmJk8jW1fU1Zof6PJEhoWVEYXhSjZun7NL_UEGmE7hYlRD7H7sCc3hxWWFvZJTu_yIjPWe9cTrX1GdT2XTv1m8wW3Dtnu_npPddwD7m_6hpuTOlWU3KTwAsJ1qt5Fg5bfjyJXocF_ejAnesXMJMCwdAqbEJrubX0ow0gBYsh5HCRV1Eu4Sz8_hfnYv30onJJOy-pDSLnf37AGq-9oAm0piX0C_vQdiI_uqq4m6CznpR325iLZrcrwyy0YtwOBujCDI2BsehvPZL_MDhlF8g0b7VGjeOy-ICpSaWvCx2BwMEq5drSumlzW9uFGZE8jQU-vjwzHxm5ElEtERiIzd7paUNYYJSAiMNKVHvCZnIjd6WAPh34V13Za2L5HQhZ3sFfxWQsFvfeEe45Tq3Xdxna2Lu_BvnC8lfCu1jjU4dIzyj944yv9Bd4jABC9T6qGhJVQDzb34j5XFxhDEHCLh5Q4OJ5Tmu4U9b3AAwyBJKaAHN8i5W0ZdPC1XXVYRVYxP_4bwh30vOPf0kKIq5gsL33toZwIOxK7rwmt6jkVrpzjx8bEeDQvUqXLZGL39hb9esMcgLkV8a6dBFtSyImJUqAPhB0Wcph0rZ_h8kOHYUogdBA=w531-h716-no?authuser=0" alt="Pavel K."/>
                    </div>
                    <div className={s.message}>{props.message}</div>
                </div>
                <div className={s.grade}>
                    <a href="#" className={`${s.like} ${s.blockGrade}`}>
                        <img src="http://cdn.onlinewebfonts.com/svg/img_165452.png" alt=""/>
                    </a>
                    <a href="#" className={`${s.dislike} ${s.blockGrade}`}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Thumbs_down_font_awesome.svg/1200px-Thumbs_down_font_awesome.svg.png" alt=""/>
                    </a>
                </div>
            </div>
            
        </div> 
    ); 
};

export default MyPosts;