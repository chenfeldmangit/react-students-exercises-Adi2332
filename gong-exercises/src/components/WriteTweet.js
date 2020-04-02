import * as React from "react";
import ProfileImg from "./ProfileImg";
import TweetAction from "./TweetAction";
import addImg from "../resources/add_img.svg"
import smile from "../resources/smile.svg"
import addLocation from "../resources/addLocation.svg"


class WriteTweet extends React.Component {

    render() {
        return <div id="writeTweet">
            <div className="tweet-header">
                <ProfileImg/>
                <label>
                    <textarea rows="5" cols="150" id="writeTweetText"/>
                </label>
            </div>
            <div className="tweet-actions">
                <div className="add-to-tweet">
                    <TweetAction icon={addImg}/>
                    <TweetAction icon={smile}/>
                    <TweetAction icon={addLocation}/>
                </div>
                <button className="tweet-button"> // TODO: onclick
                    <label className="button-label">Tweet</label>
                </button>
            </div>
        </div>;
    }
}


export default WriteTweet;