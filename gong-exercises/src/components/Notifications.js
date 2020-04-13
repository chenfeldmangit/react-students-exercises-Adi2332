import * as React from "react";
import propTypes from "prop-types";
import Notification from "./Notification";
import {NotificationList} from "../dto/NotificationList";
import UseLocalStorage from "../Util/UseLocalStorage";


function Notifications(props) {

    const [notificationList, setNotificationList] = UseLocalStorage("notificationList", NotificationList);

    return (
        <div id="notifications">
            <h1 id="notifications-title">Notifications</h1>
            {Array.from(notificationList.list).flatMap(notification =>
                <Notification notification={notification}/>)
            }
        </div>
    );
}

export default Notifications;