import style from './ProfileDataForm.module.css';
import {useForm} from "react-hook-form";

function ProfileDataForm(props) {

    const {
        handleSubmit,
        register,
        formState: {
            errors
        }
    } = useForm({
        mode: "onSubmit"
    })

        return (
        <form className={style.ul} onSubmit={handleSubmit(props.onSubmit)}>
            <div className={style.input}>Имя <input placeholder="Имя" {...register('fullName', {required: 'Обязательно для заполнения'})}/>
                {errors?.fullName && <span className={style.textError}> {errors.fullName.message || "error!"}</span>}
            </div>
            <div className={style.input}>Facebook <input placeholder="Facebook" {...register('contacts.facebook', {required: false})}/>
                {/*{errors?.contacts.facebook && <span> {errors.contacts.facebook.message || "error!"}</span>}*/}
            </div>
            <div className={style.input}>website <input placeholder="website" {...register('contacts.website', {required: false})}/>
                {/*{errors?.contacts.website && <span> {errors.contacts.website.message || "error!"}</span>}*/}
            </div>
            <div className={style.input}>vk <input placeholder="vk" {...register('contacts.vk', {required: false})}/>
                {/*{errors?.contacts.vk && <span> {errors.contacts.vk.message || "error!"}</span>}*/}
            </div>
            <div className={style.input}>twitter <input placeholder="twitter" {...register('contacts.twitter', {required: false})}/>
                {/*{errors?.contacts.twitter && <span> {errors.contacts.twitter.message || "error!"}</span>}*/}
            </div>
            <div className={style.input}>instagram <input placeholder="instagram" {...register('contacts.instagram', {required: false})}/>
                {/*{errors?.contacts.instagram && <span> {errors.contacts.instagram.message || "error!"}</span>}*/}
            </div>
            <div className={style.input}>youtube <input placeholder="youtube" {...register('contacts.youtube', {required: false})}/>
                {/*{errors?.contacts.youtube && <span> {errors.contacts.youtube.message || "error!"}</span>}*/}
            </div>
            <div className={style.input}>github <input placeholder="github" {...register('contacts.github', {required: false})}/>
                {/*{errors?.contacts.github && <span> {errors.contacts.github.message || "error!"}</span>}*/}
            </div>
            <div className={style.input}>mainLink <input placeholder="mainLink" {...register('contacts.mainLink', {required: false})}/>
                {/*{errors?.contacts.github && <span> {errors.contacts.github.message || "error!"}</span>}*/}
            </div>
            <div className={style.input}>Работа <input placeholder="Работа" {...register('lookingForAJob', {required: false})} type='checkbox'/>
                {errors?.lookingForAJob && <span> {errors.lookingForAJob.message || "error!"}</span>}
            </div>
            <div className={style.input}>Описание <input placeholder="Описание" {...register('lookingForAJobDescription', {required: 'Обязательно для заполнения'})}/>
                {errors?.lookingForAJobDescription && <span className={style.textError}> {errors.lookingForAJobDescription.message || "error!"}</span>}
            </div>
            <div className={style.input}>Обо мне <input placeholder="Обо мне" {...register('aboutMe', {required: 'Обязательно для заполнения'})}/>
                {errors?.aboutMe && <span className={style.textError}> {errors.aboutMe.message || "error!"}</span>}
            </div>
            <button>Сохранить изменения</button>
        </form>
    );
}

export default ProfileDataForm;