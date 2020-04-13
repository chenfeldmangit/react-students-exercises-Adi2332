import ProfileImg from "./ProfileImg";
import TweetAction from "./TweetAction";
import addImg from "../resources/add_img.svg";
import smile from "../resources/smile.svg";
import addLocation from "../resources/addLocation.svg";
import * as React from "react";
import {useState} from "react";


function WriteTweet(props) {
    const [textAreaVal, setTextAreaVal] = useState("");

    const isDisabled = () => textAreaVal.length < 3 ? " disabled" : "";
    const addTweet = () => {
        props.addTweetAction(textAreaVal);
        setTextAreaVal("");
    };
    const getTextAreaValue = (event) => setTextAreaVal(event.target.value);

    return (
        <div id="writeTweet">
            <div className="tweet-header">
                <ProfileImg/>
                <textarea rows="5" cols="150" id="writeTweetText" value={textAreaVal}
                          placeholder={"What's on your mind?"} onChange={getTextAreaValue}/>
            </div>
            <div className="tweet-actions">
                <div className="add-to-tweet">
                    <TweetAction icon={addImg}/>
                    <TweetAction icon={smile}/>
                    <TweetAction icon={addLocation}/>
                </div>
                <button className={"tweet-button" + isDisabled()} onClick={addTweet}>
                    <label className="button-label">Tweet</label>
                </button>
            </div>
        </div>);
}

export default WriteTweet;