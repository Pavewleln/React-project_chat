import React from 'react';
import {
    addPostActionCreator,
    addPostActiveCreator,
    updateNewPostTextActionCreator,
    UpdateNewPostTextActiveCreator
} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import Profile from "./Profile";

// const dvProfileContainer = (props) =>{
//
//     return(
//         <storeContext.Consumer>
//             {(store) =>{
//                 let state = store.getState();
//
//                 let addPost = () => {
//                     store.dispatch(addPostActiveCreator())
//                 };
//
//                 let onPostChange = (text) =>{
//                     let action = UpdateNewPostTextActiveCreator(text)
//                     store.dispatch(action)
//                 }
//
//                 return <Profile
//                     updateNewPostText={onPostChange}
//                     addPost={addPost}
//                     posts={state.profilePage.posts}
//                     newPostText={state.profilePage.newPostText}
//                 />
//             }
//
//         }
//         </storeContext.Consumer>
//
//     );
// }

let mapStateToProps = (state) =>{
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,

    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        addPost: () =>{
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) =>{
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)
        }
    }
}


const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);
export default ProfileContainer;