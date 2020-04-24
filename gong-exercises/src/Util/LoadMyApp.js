import LocalStorageApi from "./LocalStorageApi";
import {NotificationList} from "../dto/NotificationList";
import {NotificationDto} from "../dto/NotificationDto";

function LoadMyApp() {
    LocalStorageApi.setAsJson("nextTweetId", 4);

    LocalStorageApi.setAsJson("notificationList", new NotificationList([
        new NotificationDto("like", {id:1, like: false, text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}),
        new NotificationDto("follow"),
        new NotificationDto("like", {id:1, like: false, text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}),
        new NotificationDto("follow"),
        new NotificationDto("follow"),
        new NotificationDto("like", {id:1, like: false, text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}),
        new NotificationDto("like", {id:1, like: false, text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}),
        new NotificationDto("like", {id:1, like: false, text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}),
        new NotificationDto("follow")
    ]));
}

export default LoadMyApp;