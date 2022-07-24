import React, {Component} from 'react';
import {AddMessageActiveCreator, UpdateNewMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = (props) => {
//
//     return (
//         <storeContext.Consumer>
//             {(store) =>{
//                 let state = store.getState();
//                 let addPost = () => {
//                     store.dispatch(AddMessageActiveCreator())
//                 };
//
//                 const messageChange = (text) =>{
//                     let action = UpdateNewMessage(text)
//                     store.dispatch(action)
//                 };
//                 return <Dialogs
//                     updateNewMessage={messageChange}
//                     addPost={addPost}
//                     dialogsName={state.dialogsPage.dialogsName}
//                     dialogsMessage={state.dialogsPage.dialogsMessage}
//                     newPostText={state.dialogsPage.newMessage}
//
//             />}
//         }
//
//         </storeContext.Consumer>
//     );
// };

let mapStateToProps = (state) =>{
    return {
        dialogsName: state.dialogsPage.dialogsName,
        dialogsMessage: state.dialogsPage.dialogsMessage,
        newPostText: state.dialogsPage.newMessage,

    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        addPost: () =>{
            dispatch(AddMessageActiveCreator())
        },
        updateNewMessage: (text) =>{
            let action = UpdateNewMessage(text)
            dispatch(action)
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;