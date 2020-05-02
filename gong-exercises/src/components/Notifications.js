import * as React from "react";
import Notification from "./Notification";
import {connect} from "react-redux";


function Notifications(props) {

    return (
        <div id="notifications">
            <h1 id="notifications-title">Notifications</h1>
            {props.notificationList.reverse().flatMap(notification => <Notification notification={notification}/>)}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        notificationList: state.notificationList
    }
};

export default connect(mapStateToProps)(Notifications);
