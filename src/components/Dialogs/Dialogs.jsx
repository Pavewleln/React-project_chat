import React, {Component} from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {AddMessageActiveCreator, UpdateNewMessage} from "../../redux/dialogs-reducer";

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

    let dialogElements = props.dialogsName.map(d => <DialogItem name={d.name} key={d.id}/>);

    let messageElements = props.dialogsMessage.map(m => <Message key={m.id} message={m.message} className={s.link}/>)

    let NewMessage = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    const messageChange = () =>{
        let text = NewMessage.current.value;
        props.updateNewMessage(text)
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
                <div className={s.sendMessages}>
                    <textarea
                        onChange={messageChange}
                        value={props.newPostText}
                        ref={NewMessage}
                    />
                    <button onClick={addPost}></button>
                </div>
            </div>
        </div>
    );
};
export default Dialogs;