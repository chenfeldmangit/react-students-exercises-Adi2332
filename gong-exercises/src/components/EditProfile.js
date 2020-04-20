import * as React from "react";
import propTypes from "prop-types";
import close from "../resources/close.svg"
import yoyogi from "../resources/yoyogi.jpg"
import addPhoto from "../resources/addPhoto.svg"
import ProfileImg from "./ProfileImg";
import FormInput from "./FormInput";
import {ProfileDto} from "../dto/ProfileDto";
import {Link} from 'react-router-dom';

class EditProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.profile.name,
            bio: this.props.profile.bio,
            location: this.props.profile.location
        };
    }

    render() {
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
                    <FormInput id="name" maxLength={50} label="Name" value={this.props.profile.name} onChange={this.handleChange}/>
                    <FormInput id="bio" maxLength={250} label="Bio" value={this.props.profile.bio} onChange={this.handleChange}/>
                    <FormInput id="location" maxLength={100} label="Location" value={this.props.profile.location} onChange={this.handleChange}/>
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
        this.props.profile.update(this.state.name, this.state.bio, this.state.location);
    };
}

EditProfile.propTypes = {
    profile: propTypes.instanceOf(ProfileDto).isRequired
};

export default EditProfile;