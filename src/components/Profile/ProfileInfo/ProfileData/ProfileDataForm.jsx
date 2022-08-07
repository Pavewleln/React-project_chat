import style from './ProfileDataForm.module.css';
import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../../common/FomrsControls/FormsControls";
import s from '../../../common/FomrsControls/FormsControls.module.css'

function ProfileDataForm({profile, handleSubmit, error}) {
        return (
        <form className={style.ul} onSubmit={handleSubmit}>
            <div className={style.input}>Имя {createField("Имя", "fullName", [], Input)}</div>
            <div className={style.input}>Facebook:{createField("Facebook", "contacts.facebook", [], Input)}</div>
            <div className={style.input}>website:{createField("website", "contacts.website", [], Input)}</div>
            <div className={style.input}>vk:{createField("vk", "contacts.vk", [], Input)}</div>
            <div className={style.input}>twitter:{createField("twitter", "contacts.twitter", [], Input)}</div>
            <div className={style.input}>instagram:{createField("instagram", "contacts.instagram", [], Input)}</div>
            <div className={style.input}>youtube:{createField("youtube", "contacts.youtube", [], Input)}</div>
            <div className={style.input}>github:{createField("github", "contacts.github", [], Input)}</div>
            <div className={style.input}>mainLink:{createField("mainLink", "contacts.mainLink", [], Input)}</div>

                {/*{Object.keys(profile.contacts).map(key =>{*/}
                {/*        return <div className={style.contacts}>*/}
                {/*                {key} : {createField(key, "contacts." + key, [], Input)}*/}
                {/*        </div>*/}
                {/*})}*/}

            <div className={style.input}>Ищу работу:{createField("Работа", "lookingForAJob", [], Input,{type:"checkbox"})}</div>
            <div className={style.input}>Мои скилы:{createField("Описание", "lookingForAJobDescription", [], Textarea)}</div>
            <div className={style.input}>Обо мне:{createField("Обо мне", "aboutMe", [], Textarea)}</div>
            <button>Сохранить изменения</button>
            {error && <div className={s.formControlSummaryError}>
                {error}
            </div>}
        </form>
    );
}

const ProfileDataReduxForm = reduxForm({form: 'editProfile', enableReinitialize: true, destroyOnUnmount: false})(ProfileDataForm)

export default ProfileDataReduxForm;