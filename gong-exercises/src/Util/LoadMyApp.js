import LocalStorageApi from "./LocalStorageApi";
import {NotificationList} from "../dto/NotificationList";

function LoadMyApp() {
    LocalStorageApi.setAsJson("nextTweetId", 4);

    LocalStorageApi.setAsJson("notificationList", new NotificationList([
        {type: "like", tweetId: 1},
        {type: "follow"},
        {type: "like", tweetId: 2},
        {type: "follow"},
        {type: "follow"},
        {type: "like", tweetId: 2},
        {type: "like", tweetId: 2},
        {type: "like", tweetId: 3},
        {type: "follow"}
    ]));
}

export default LoadMyApp;