import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {useForm} from "react-hook-form";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <li className={s.item}><NavLink to={path}>{props.name}</NavLink></li>
    );
};

const Message = (props) => {
    return (
        <li className={s.message_item}>{props.message}</li>
    );
}

const Dialogs = (props) => {

    const {
        handleSubmit,
        register,
        formState: {
            errors
        },
        reset
    } = useForm({
        mode: "onSubmit"
    })



    let dialogElements = props.dialogsName.map(d => <DialogItem name={d.name} key={d.id}/>);

    let messageElements = props.dialogsMessage.map(m => <Message key={m.id} message={m.message} className={s.link}/>)

    const AddNewMessage = (values) => {
        props.addMessage(values.newMessage)
        reset()
    }

    const AddMessageForm = (props) =>{
        return(
            <form onSubmit={handleSubmit(props.onSubmit)}>
                <div className={s.messageInput}>
                    <input className={s.messageInputTextarea} {...register('newMessage', {required: 'Сначала что-нибудь напишите'})}/>
                    {errors?.newMessage && <span className={s.textError}> {errors.newMessage.message || "error!"}</span>}
                    <button className={s.messageInputButton}></button>
                </div>
            </form>
        )
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                <ul>
                    {dialogElements}
                </ul>
            </div>
            <div className={s.message}>
                <ul>
                    {messageElements}
                </ul>
                <AddMessageForm onSubmit={AddNewMessage}/>
            </div>
        </div>
    );
};

export default Dialogs;