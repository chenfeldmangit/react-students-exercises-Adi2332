import LocalStorageApi from "./LocalStorageApi";

const bio = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, asperiores assumenda beatae cupiditate dolorem, ea esse fugiat iure mollitia odio odit pariatur perspiciatis possimus qui repellendus sapiente sunt velit.";
const tweetText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus accusantium amet autem cumque error eum ex, excepturi exercitationem labore laudantium minus, molestiae neque nesciunt, nisi officia perferendis quidem voluptate. Accusamus aliquam aperiam consequatur delectus deserunt dolores, expedita fugiat hic illo illum incidunt ipsam magnam maiores minus molestias neque odio odit officia pariatur praesentium, quo reiciendis repellendus sunt tempora voluptate! Adipisci autem dicta et eum expedita id inventore ipsum laudantium molestiae, nemo neque nostrum possimus quae qui reiciendis rerum vero. Ab adipisci alias cupiditate eum laborum non nostrum rerum tenetur! Doloremque est eum labore voluptatem! Aperiam culpa deleniti dolores fuga fugit harum id inventore ipsam itaque labore laboriosam maiores, neque nihil non qui quidem reprehenderit soluta suscipit veniam voluptas! Accusantium. Ab ad, adipisci aliquid at atque consectetur, distinctio dolores ea est facere facilis fuga illum in ipsum iusto libero maiores minus natus nesciunt praesentium reiciendis repellat repellendus similique, vitae voluptatibus.";

function LoadMyApp() {
    LocalStorageApi.setInt("nextTweetId", 4);
    LocalStorageApi.setAsJson("tweetList", [
        {id: 1, like: false, text: "1 " + tweetText},
        {id: 2, like: true, text: "2 " + tweetText},
        {id: 3, like: false, text: "3 " + tweetText},
    ]);

    LocalStorageApi.setAsJson("notificationList", [
        {type: "follow"},
        {type: "like", tweetId: 2},
        {type: "follow"},
        {type: "follow"}
    ]);

    LocalStorageApi.setAsJson("users", {
        "Adi": {
            name: "Adi",
            password: "pass",
            location: "Tel Aviv",
            joinOn: "March 2020",
            following: 152,
            followers: 2548,
            bio: bio
        }
    });
}

export default LoadMyApp;