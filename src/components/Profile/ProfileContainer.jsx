import React from 'react';
import {
    addPost, profileInfoThunk, setUserProfile, updateNewPostText,
} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import {Navigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import withRouter from "../../hoc/withRoute";
import {compose} from "redux";

class ProfileComponent extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 25097;
        }
        this.props.profileInfoThunk(userId)
    }

    render() {
        if (!this.props.isAuth) return <Navigate to={'/login'}/>;
        return (<Profile
            addPost={this.props.addPost}
            updateNewPostText={this.props.updateNewPostText}
            posts={this.props.posts}
            newPostText={this.props.newPostText}
            profile={this.props.profile}
        />);
    }

}

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts, newPostText: state.profilePage.newPostText, profile: state.profilePage.profile
    }
}

export default compose(
    connect(mapStateToProps, {updateNewPostText, addPost, setUserProfile, profileInfoThunk}),
        withRouter,
        withAuthRedirect,
    )(ProfileComponent);