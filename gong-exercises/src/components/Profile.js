import * as React from "react";
import leftArrow from "../resources/left-arrow.svg"
import yoyogi from "../resources/yoyogi.jpg"
import location from "../resources/location.svg"
import joinOn from "../resources/joinOn.svg"
import propTypes from "prop-types";
import ProfileImg from "./ProfileImg";
import {ProfileDto} from "../dto/ProfileDto";

class Profile extends React.Component {

    render() {
        return (<div id="profilePage">
                <div className="profile-header">
                    <button className="button" onClick={this.props.backAction}>
                        <object data={leftArrow} className="button-icon"/>
                    </button>
                    <div>
                        <h1 id="profileTitle">{this.props.profile.name}</h1>
                        <p id="tweetNumber">{this.props.profile.tweetsNumber + " Tweets"}</p>
                    </div>
                </div>

                <div id="profile">
                    <div className="profile-header">
                        <img src={yoyogi} className="background-img" alt="background-img"/>
                        <ProfileImg/>
                        <button className="edit-button" onClick="editProfile()">
                            <label className="button-label">Edit Profile</label>
                        </button>
                    </div>
                    <h3 id="profileName">{this.props.profile.name}</h3>
                    <p id="bio">{this.props.profile.bio}</p>
                    <div id="metadata">
                        <div className="metadata">
                            <object data={location}/>
                            <label id="location">{this.props.profile.location}</label>
                        </div>
                        <div className="metadata">
                            <object data={joinOn}/>
                            <label id="joinOn">{this.props.profile.joinOn}</label>
                        </div>
                    </div>
                    <div id="follow-metadata">
                        <label className="metadata">
                            <strong id="following">{this.props.profile.following}</strong> Following</label>
                        <label className="metadata">
                            <strong id="followers">{this.props.profile.followers}</strong> Followers</label>
                    </div>
                </div>

            </div>
        );
    }
}

Profile.propTypes = {
    backAction: propTypes.func.isRequired,
    profile: propTypes.instanceOf(ProfileDto).isRequired
};

export default Profile;