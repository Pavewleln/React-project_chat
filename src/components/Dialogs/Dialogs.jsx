import React, {Component} from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

let NewMessage = React.createRef();

const SendNewMessage = () =>{
    let text = NewMessage.current.value;
    alert(text);
}

const DialogItem = (props) =>{
    let path = '/Dialogs/' + props.id;
    return(
        <li className={s.item}><NavLink to={path}>{props.name}</NavLink></li>
    );
};

const Message = (props) =>{
    return(
        <li className={s.message_item}>{props.message}</li>
    );
}

const Dialogs = (props) => {

    let dialogElements = props.state.dialogsName.map((d) => <DialogItem name={d.name} key={d.id}/>);

    let messageElements = props.state.dialogsMessage.map((m) => <Message key={m.id} message={m.message}/>)

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
                <div className={s.sendMessages}>
                    <textarea ref={NewMessage}></textarea>
                    <button onClick={SendNewMessage}></button>
                </div>
            </div>
        </div>
    );
};
export default Dialogs;