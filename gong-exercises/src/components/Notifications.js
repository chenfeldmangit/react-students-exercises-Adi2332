import * as React from "react";
import Notification from "./Notification";
import UseLocalStorage from "../Util/UseLocalStorage";


function Notifications(props) {

    const [notificationList, setNotificationList] = UseLocalStorage("notificationList");

    return (
        <div id="notifications">
            <h1 id="notifications-title">Notifications</h1>
            {Array.from(notificationList).flatMap(notification => <Notification notification={notification}/>)}
        </div>
    );
}

export default Notifications;