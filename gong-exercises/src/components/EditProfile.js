import * as React from "react";
import propTypes from "prop-types";
import close from "../resources/close.svg"
import yoyogi from "../resources/yoyogi.jpg"
import addPhoto from "../resources/addPhoto.svg"
import ProfileImg from "./ProfileImg";
import FormInput from "./FormInput";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {addTweet, deleteTweet, likeTweet} from "../actions/TweetActions";
import {editProfile} from "../actions/UserActions";

class EditProfile extends React.Component {

    constructor(props) {
        super(props);
        const profile = this.props.users[this.props.currentUser];
        this.state = {
            name: profile.name,
            bio: profile.bio,
            location: profile.location
        };
    }

    render() {
        const profile = this.props.users[this.props.currentUser];

        return <div className="dialog">
            <dialog open id="editProfile">
                <div className="header">
                    <Link to="/profile">
                        <button className="button">
                            <object data={close} className="button-icon"/>
                        </button>
                    </Link>
                    <h3>Edit Profile</h3>
                    <Link to="/profile">
                        <button className="save-button" onClick={this.saveProfile}>
                            <label className="button-label">Save</label>
                        </button>
                    </Link>
                </div>

                <form id="edit-profile-form" method="post" onSubmit={(event) => event.preventDefault()}>
                    <div className="edit-img">
                        <img src={yoyogi} className="background-img" alt="background-img"/>
                        <div id="edit-background-img-warp">
                            <object data={addPhoto} className="edit-img"/>
                        </div>

                        <ProfileImg/>
                        <div id="edit-profile-img-warp">
                            <object data={addPhoto} className="edit-img"/>
                        </div>
                    </div>
                    <FormInput id="name" maxLength={50} label="Name" value={profile.name} onChange={this.handleChange}/>
                    <FormInput id="bio" maxLength={250} label="Bio" value={profile.bio} onChange={this.handleChange}/>
                    <FormInput id="location" maxLength={100} label="Location" value={profile.location} onChange={this.handleChange}/>
                </form>

            </dialog>
        </div>;
    }

    handleChange = (key, value) => {
        let s = {};
        s[key] = value;
        this.setState(s);
    };

    saveProfile = () => {
        this.props.editProfile(this.state.name, this.state.location, this.state.bio);
    };
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser,
        users: state.user.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        editProfile: (name, location, bio) => dispatch(editProfile(name, location, bio))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);