import React, {useState} from 'react';
import './Style/css/style.css';
import Menu from "./components/Menu";
import Stream from "./components/Stream";
import Profile from "./components/Profile";
import {ProfileDto} from "./dto/ProfileDto";
import {TweetDto} from "./dto/TweetDto";
import {TweetList} from "./dto/TweetList";

const tweetList = new TweetList([new TweetDto(1, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus accusantium amet autem cumque error eum ex, excepturi exercitationem labore laudantium minus, molestiae neque nesciunt, nisi officia perferendis quidem voluptate.</span><span>Accusamus aliquam aperiam consequatur delectus deserunt dolores, expedita fugiat hic illo illum incidunt ipsam magnam maiores minus molestias neque odio odit officia pariatur praesentium, quo reiciendis repellendus sunt tempora voluptate!</span><span>Adipisci autem dicta et eum expedita id inventore ipsum laudantium molestiae, nemo neque nostrum possimus quae qui reiciendis rerum vero. Ab adipisci alias cupiditate eum laborum non nostrum rerum tenetur!</span><span>Doloremque est eum labore voluptatem! Aperiam culpa deleniti dolores fuga fugit harum id inventore ipsam itaque labore laboriosam maiores, neque nihil non qui quidem reprehenderit soluta suscipit veniam voluptas! Accusantium.</span><span>Ab ad, adipisci aliquid at atque consectetur, distinctio dolores ea est facere facilis fuga illum in ipsum iusto libero maiores minus natus nesciunt praesentium reiciendis repellat repellendus similique, vitae voluptatibus."),
    new TweetDto(2, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus accusantium amet autem cumque error eum ex, excepturi exercitationem labore laudantium minus, molestiae neque nesciunt, nisi officia perferendis quidem voluptate.</span><span>Accusamus aliquam aperiam consequatur delectus deserunt dolores, expedita fugiat hic illo illum incidunt ipsam magnam maiores minus molestias neque odio odit officia pariatur praesentium, quo reiciendis repellendus sunt tempora voluptate!</span><span>Adipisci autem dicta et eum expedita id inventore ipsum laudantium molestiae, nemo neque nostrum possimus quae qui reiciendis rerum vero. Ab adipisci alias cupiditate eum laborum non nostrum rerum tenetur!</span><span>Doloremque est eum labore voluptatem! Aperiam culpa deleniti dolores fuga fugit harum id inventore ipsam itaque labore laboriosam maiores, neque nihil non qui quidem reprehenderit soluta suscipit veniam voluptas! Accusantium.</span><span>Ab ad, adipisci aliquid at atque consectetur, distinctio dolores ea est facere facilis fuga illum in ipsum iusto libero maiores minus natus nesciunt praesentium reiciendis repellat repellendus similique, vitae voluptatibus."),
    new TweetDto(3, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus accusantium amet autem cumque error eum ex, excepturi exercitationem labore laudantium minus, molestiae neque nesciunt, nisi officia perferendis quidem voluptate.</span><span>Accusamus aliquam aperiam consequatur delectus deserunt dolores, expedita fugiat hic illo illum incidunt ipsam magnam maiores minus molestias neque odio odit officia pariatur praesentium, quo reiciendis repellendus sunt tempora voluptate!</span><span>Adipisci autem dicta et eum expedita id inventore ipsum laudantium molestiae, nemo neque nostrum possimus quae qui reiciendis rerum vero. Ab adipisci alias cupiditate eum laborum non nostrum rerum tenetur!</span><span>Doloremque est eum labore voluptatem! Aperiam culpa deleniti dolores fuga fugit harum id inventore ipsam itaque labore laboriosam maiores, neque nihil non qui quidem reprehenderit soluta suscipit veniam voluptas! Accusantium.</span><span>Ab ad, adipisci aliquid at atque consectetur, distinctio dolores ea est facere facilis fuga illum in ipsum iusto libero maiores minus natus nesciunt praesentium reiciendis repellat repellendus similique, vitae voluptatibus.")
]);

function App() {
    const [nextTweetId, setNextTweetId] = useState(4);
    const getNewTweetId = () => {
        const result = nextTweetId;
        setNextTweetId(nextTweetId + 1);
        return result;
    };

    const [profile, setProfile] = useState(new ProfileDto("Adi", 3, "Tel Aviv", "March 2020",
        152, 2548, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, " +
        "asperiores assumenda beatae cupiditate dolorem, ea esse fugiat iure mollitia odio odit pariatur perspiciatis " +
        "possimus qui repellendus sapiente sunt velit."));

    const [state, setState] = useState("stream");
    const menuActions = {
        loadProfile: () => setState("profile"),
        loadStream: () => setState("stream")
    };

    return (
        <div className="App">
            <Menu actions={menuActions}/>
            {state === "stream" ?
                <Stream tweetList={tweetList}/>
                : <Profile profile={profile} back={() => setState("stream")}/>}
            <div id="follow"/>
        </div>
    );
}

export default App;
