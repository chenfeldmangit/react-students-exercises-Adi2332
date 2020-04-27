import * as React from "react";
import leftArrow from "../resources/left-arrow.svg"
import yoyogi from "../resources/yoyogi.jpg"
import location from "../resources/location.svg"
import joinOn from "../resources/joinOn.svg"
import ProfileImg from "./ProfileImg";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

function Profile(props) {


    console.log(props.users, props.currentUser);
    const profile = props.users[props.currentUser];

    return (<div id="profilePage">
            <div className="profile-header">
                <Link className="button" to="/">
                    <object data={leftArrow}/>
                </Link>
                <div>
                    <h1 id="profileTitle">{profile.name}</h1>
                    <p id="tweetNumber">{"3 Tweets"}</p>
                </div>
            </div>

            <div id="profile">
                <div className="profile-header">
                    <img src={yoyogi} className="background-img" alt="background-img"/>
                    <ProfileImg/>
                    <Link to="/profile/edit">
                        <button className="edit-button">
                            <label className="button-label">Edit Profile</label>
                        </button>
                    </Link>
                </div>
                <h3 id="profileName">{profile.name}</h3>
                <p id="bio">{profile.bio}</p>
                <div id="metadata">
                    <div className="metadata">
                        <object data={location}/>
                        <label id="location">{profile.location}</label>
                    </div>
                    <div className="metadata">
                        <object data={joinOn}/>
                        <label id="joinOn">{profile.joinOn}</label>
                    </div>
                </div>
                <div id="follow-metadata">
                    <label className="metadata">
                        <strong id="following">{profile.following}</strong> Following</label>
                    <label className="metadata">
                        <strong id="followers">{profile.followers}</strong> Followers</label>
                </div>
            </div>

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser,
        users: state.user.users
    }
};

export default connect(mapStateToProps)(Profile);