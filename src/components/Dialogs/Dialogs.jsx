import React, {Component} from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";



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

    let dialogsName = [
        {id: 1, name: 'Дмитрий Л.'},
        {id: 2, name: 'Олег К'},
        {id: 3, name: 'Константин Б.'},
        {id: 4, name: 'Егор К.'},
        {id: 5, name: 'Александр А.'},
        {id: 6, name: 'Ольга П.'},
        {id: 7, name: 'Елена У.'},
        {id: 8, name: 'Владимир М.'},
        {id: 9, name: 'Павел Е.'},
        {id: 10, name: 'Вероника В.'}
    ]

    let dialogsMessage =[
        {id: 1, message:"Привет! Как у тебя дела?"},
        {id: 2, message:"Привет! Отлично! А у тебя?"},
        {id: 3, message:"И у меня все хорошо"},
        {id: 4, message:"Это хорошо, что хорошо"}
    ]

    let dialogElements = dialogsName.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messageElements = dialogsMessage.map(m => <Message id={m.id} message={m.message}/>)

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
            </div>
        </div>
    );
};
export default Dialogs;