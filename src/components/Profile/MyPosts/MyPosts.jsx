import {memo} from "react";
import s from './MyPosts.module.css';

const MyPosts = memo((props) =>{
    return(
        <div className={s.container}>
            <div className={s.block}>
                <div className={s.post}>
                    <div className={s.avatar}>
                        <img src={props.profile.photos.large} alt={props.profile.fullName}/>
                    </div>
                    <div className={s.message}>{props.message} <div className={s.kolLikes}>likes: {props.likes}</div> <div className={s.kolDislikes}>Dislikes:{props.dislikes}</div></div>
                </div>
                {/*Лайк и дизлайк*/}
                <div className={s.grade}>
                    <a href="src/components/Profile/MyPosts/MyPosts#" className={`${s.like} ${s.blockGrade}`}>
                        <img src="http://cdn.onlinewebfonts.com/svg/img_165452.png" alt="like"/>
                    </a>
                    <a href="src/components/Profile/MyPosts/MyPosts#" className={`${s.dislike} ${s.blockGrade}`}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Thumbs_down_font_awesome.svg/1200px-Thumbs_down_font_awesome.svg.png" alt="dislike"/>
                    </a>
                </div>
            </div>
            
        </div> 
    ); 
});

export default MyPosts;