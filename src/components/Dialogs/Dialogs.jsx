import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {Textarea} from "../common/FomrsControls/FormsControls";

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

    let dialogElements = props.dialogsName.map(d => <DialogItem name={d.name} key={d.id}/>);

    let messageElements = props.dialogsMessage.map(m => <Message key={m.id} message={m.message} className={s.link}/>)

    const AddNewMessage = (values) => {
        props.addMessage(values.newMessage)
    }

    let maxLength300 = maxLengthCreator(300)

    const AddMessageForm = (props) =>{
        return(
            <form onSubmit={props.handleSubmit}>
                <div className={s.messageInput}>
                    <Field component={Textarea} name="newMessage" placeholder="Напишите сообщение" validate={[requiredField, maxLength300]}/>
                    <button></button>
                </div>
            </form>
        )
    }

    const AddMessageReduxForm = reduxForm({form: "dialogsAddMessage"})(AddMessageForm)

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
                <AddMessageReduxForm onSubmit={AddNewMessage}/>
            </div>
        </div>
    );
};

export default Dialogs;