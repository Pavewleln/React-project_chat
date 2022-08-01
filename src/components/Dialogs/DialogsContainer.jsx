import React, {Component} from 'react';
import {addMessage, updateNewMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsName: state.dialogsPage.dialogsName,
        dialogsMessage: state.dialogsPage.dialogsMessage,
        newPostText: state.dialogsPage.newMessage,
    }
}


export default compose(connect(mapStateToProps, {
        addMessage
    }),
    withAuthRedirect)(Dialogs);