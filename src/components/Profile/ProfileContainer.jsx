import React from 'react';
import {
    addPost, getStatus, profileInfoThunk, setUserProfile, updateStatus,
} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import {Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import withRouter from "../../hoc/withRoute";
import {compose} from "redux";

class ProfileComponent extends React.Component {

    componentDidMount() {
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
    connect(mapStateToProps, {addPost, setUserProfile, profileInfoThunk, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect,
)(ProfileComponent);