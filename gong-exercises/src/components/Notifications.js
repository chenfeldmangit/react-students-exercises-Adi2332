import * as React from "react";
import {useEffect, useState} from "react";
import propTypes from "prop-types";
import Notification from "./Notification";
import LocalStorageApi from "../Util/LocalStorageApi";
import {NotificationList} from "../dto/NotificationList";


function Notifications(props) {

    const [notificationList, setNotificationList] = useState(new NotificationList(props.notificationList.list));

    useEffect(() => {
        LocalStorageApi.setAsJson("notificationList", notificationList);
    }, [notificationList]);

    return (
        <div id="notifications">
            <h1 id="notifications-title">Notifications</h1>
            {Array.from(notificationList.list).flatMap(notification =>
                <Notification notification={notification}/>)
            }
        </div>
    );
}

Notifications.propTypes = {
    notificationList: propTypes.instanceOf(NotificationList).isRequired
};

export default Notifications;