import LocalStorageApi from "./LocalStorageApi";
import {ProfileDto} from "../dto/ProfileDto";
import {TweetList} from "../dto/TweetList";
import {TweetDto} from "../dto/TweetDto";
import {NotificationList} from "../dto/NotificationList";
import {NotificationDto} from "../dto/NotificationDto";

function LoadMyApp() {
    LocalStorageApi.setAsJson("nextTweetId", 4);

    LocalStorageApi.setAsJson("notificationList", new NotificationList([
        new NotificationDto("like", new TweetDto(1, "Lorem ipsum dolor sit amet, consectetur adipisicing elit.")),
        new NotificationDto("follow"),
        new NotificationDto("like", new TweetDto(1, "Lorem ipsum dolor sit amet, consectetur adipisicing elit.")),
        new NotificationDto("follow"),
        new NotificationDto("follow"),
        new NotificationDto("like", new TweetDto(1, "Lorem ipsum dolor sit amet, consectetur adipisicing elit.")),
        new NotificationDto("like", new TweetDto(1, "Lorem ipsum dolor sit amet, consectetur adipisicing elit.")),
        new NotificationDto("like", new TweetDto(1, "Lorem ipsum dolor sit amet, consectetur adipisicing elit.")),
        new NotificationDto("follow")
    ]));
}

export default LoadMyApp;