import LocalStorageApi from "./LocalStorageApi";
import {ProfileDto} from "../dto/ProfileDto";
import {TweetList} from "../dto/TweetList";
import {TweetDto} from "../dto/TweetDto";
import {NotificationList} from "../dto/NotificationList";
import {NotificationDto} from "../dto/NotificationDto";

function LoadMyApp() {
    LocalStorageApi.setAsJson("profile", new ProfileDto("Adi", 3, "Tel Aviv", "March 2020",
        152, 2548, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, " +
        "asperiores assumenda beatae cupiditate dolorem, ea esse fugiat iure mollitia odio odit pariatur perspiciatis " +
        "possimus qui repellendus sapiente sunt velit."));

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