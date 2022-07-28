import React from 'react';
import {
    addPost, setUserProfile, updateNewPostText,
} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import * as axios from "axios";
import {useParams} from "react-router-dom";

function withRouter(Children) {
    return (props) => {
        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

class ProfileComponent extends React.Component {

componentDidMount()
{
    let userId = this.props.match.params.userId;
    if(!userId) {
        userId = 25097;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        .then(response => {
            this.props.setUserProfile(response.data)
        })
}

render()
{
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

let WithUtlDataContainerComponent = withRouter(ProfileComponent)

export default connect(mapStateToProps, {
    updateNewPostText, addPost, setUserProfile
})(WithUtlDataContainerComponent);