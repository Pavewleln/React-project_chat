import s from "../ProfileInfo.module.css";

function ProfileData(profile) {
    return (
        <div className={s.description}>
            <div className={s.name}>
                {profile.name}
            </div>
            <div className={s.data}>
                <ul>
                    <li>Контакты</li>
                    <li>Facebook: {profile.facebook}</li>
                    <li>website: {profile.website}</li>
                    <li>vk: {profile.vk}</li>
                    <li>twitter: {profile.twitter}</li>
                    <li>instagram: {profile.instagram}</li>
                    <li>youtube: {profile.youtube}</li>
                    <li>github: {profile.github}</li>
                    <li>mainLink: {profile.mainLink}</li>
                    <li>Работа: {profile.lookingForAJob ? "yes" : "no"}</li>
                    <li>Описание: {profile.lookingForAJobDescription}</li>
                </ul>
            </div>
        </div>
    );
}

export default ProfileData;