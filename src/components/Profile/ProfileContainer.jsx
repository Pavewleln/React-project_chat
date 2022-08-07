import React from 'react';
import {
    addPost, getStatus, profileInfoThunk, setUserProfile, updateStatus, savePhoto, saveProfile
} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import {Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import withRouter from "../../hoc/withRoute";
import {compose} from "redux";

class ProfileComponent extends React.Component {

    refreshProfile = () =>{
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if(!userId){
                this.props.history.push("/login")
            }
        }
        this.props.profileInfoThunk(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId != prevProps.match.params.userId){
            this.refreshProfile();
        }
    }

    render() {
        if (!this.props.isAuth) return <Navigate to={'/login'}/>;
        return (<Profile
            addPost={this.props.addPost}
            updateNewPostText={this.props.updateNewPostText}
            posts={this.props.posts}
            newPostText={this.props.newPostText}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
            savePhoto={this.props.savePhoto}
            isOwner={!this.props.match.params.userId}
            saveProfile={this.props.saveProfile}
        />);
    }

}

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {addPost, setUserProfile, profileInfoThunk, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect,
)(ProfileComponent);