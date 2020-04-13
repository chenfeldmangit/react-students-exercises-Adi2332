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

    LocalStorageApi.setAsJson("tweetList", new TweetList([
        new TweetDto(1, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus accusantium amet autem cumque error eum ex, excepturi exercitationem labore laudantium minus, molestiae neque nesciunt, nisi officia perferendis quidem voluptate. Accusamus aliquam aperiam consequatur delectus deserunt dolores, expedita fugiat hic illo illum incidunt ipsam magnam maiores minus molestias neque odio odit officia pariatur praesentium, quo reiciendis repellendus sunt tempora voluptate! Adipisci autem dicta et eum expedita id inventore ipsum laudantium molestiae, nemo neque nostrum possimus quae qui reiciendis rerum vero. Ab adipisci alias cupiditate eum laborum non nostrum rerum tenetur! Doloremque est eum labore voluptatem! Aperiam culpa deleniti dolores fuga fugit harum id inventore ipsam itaque labore laboriosam maiores, neque nihil non qui quidem reprehenderit soluta suscipit veniam voluptas! Accusantium. Ab ad, adipisci aliquid at atque consectetur, distinctio dolores ea est facere facilis fuga illum in ipsum iusto libero maiores minus natus nesciunt praesentium reiciendis repellat repellendus similique, vitae voluptatibus."),
        new TweetDto(2, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus accusantium amet autem cumque error eum ex, excepturi exercitationem labore laudantium minus, molestiae neque nesciunt, nisi officia perferendis quidem voluptate. Accusamus aliquam aperiam consequatur delectus deserunt dolores, expedita fugiat hic illo illum incidunt ipsam magnam maiores minus molestias neque odio odit officia pariatur praesentium, quo reiciendis repellendus sunt tempora voluptate! Adipisci autem dicta et eum expedita id inventore ipsum laudantium molestiae, nemo neque nostrum possimus quae qui reiciendis rerum vero. Ab adipisci alias cupiditate eum laborum non nostrum rerum tenetur! Doloremque est eum labore voluptatem! Aperiam culpa deleniti dolores fuga fugit harum id inventore ipsam itaque labore laboriosam maiores, neque nihil non qui quidem reprehenderit soluta suscipit veniam voluptas! Accusantium. Ab ad, adipisci aliquid at atque consectetur, distinctio dolores ea est facere facilis fuga illum in ipsum iusto libero maiores minus natus nesciunt praesentium reiciendis repellat repellendus similique, vitae voluptatibus."),
        new TweetDto(3, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus accusantium amet autem cumque error eum ex, excepturi exercitationem labore laudantium minus, molestiae neque nesciunt, nisi officia perferendis quidem voluptate. Accusamus aliquam aperiam consequatur delectus deserunt dolores, expedita fugiat hic illo illum incidunt ipsam magnam maiores minus molestias neque odio odit officia pariatur praesentium, quo reiciendis repellendus sunt tempora voluptate! Adipisci autem dicta et eum expedita id inventore ipsum laudantium molestiae, nemo neque nostrum possimus quae qui reiciendis rerum vero. Ab adipisci alias cupiditate eum laborum non nostrum rerum tenetur! Doloremque est eum labore voluptatem! Aperiam culpa deleniti dolores fuga fugit harum id inventore ipsam itaque labore laboriosam maiores, neque nihil non qui quidem reprehenderit soluta suscipit veniam voluptas! Accusantium. Ab ad, adipisci aliquid at atque consectetur, distinctio dolores ea est facere facilis fuga illum in ipsum iusto libero maiores minus natus nesciunt praesentium reiciendis repellat repellendus similique, vitae voluptatibus.")
    ]));

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