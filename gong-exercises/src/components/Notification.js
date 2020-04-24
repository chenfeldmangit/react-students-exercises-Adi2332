import * as React from "react";
import propTypes from "prop-types";
import ProfileImg from "./ProfileImg";
import like from "../resources/like-full.svg"
import follow from "../resources/follow.svg"
import {connect} from "react-redux";

function Notification(props) {

    return (
        <div className="notification">
            <div className="notification-header">
                <object className="notification-type" data={props.notification.type === "like" ? like : follow}/>
                <ProfileImg/>
            </div>
            <p className="notification-person"><strong>Adi </strong> {props.notification.type === "follow" ? " followed you" : "like your tweet"}</p>
            <p className="notification-text"> {props.notification.type === "follow" ? "" : props.tweetList[props.notification.tweetId].text}</p>
        </div>
    );
}

Notification.propTypes = {
    notification: propTypes.object.isRequired
};

const mapStateToProps = (store) => {
    return {
        ...store.tweetList
    }
};

export default connect(mapStateToProps)(Notification);