import ProfileImg from "../ProfileImg";
import TweetAction from "../TweetAction";
import like from "../../resources/like.svg";
import comment from "../../resources/comment.svg";
import share from "../../resources/share.svg";
import bin from "../../resources/bin.svg";
import * as React from "react";


function TweetFunc(props) {

    return <div className="tweet" dataid={props.tweet.id}>
        <div className="tweet-header">
            <ProfileImg class="button-icon"/>
            <p className="tweet-title">title</p>
        </div>
        <p className="tweet-text">{props.tweet.text}</p>
        <div className="post-attachment"/>
        <div className="tweet-actions">
            <TweetAction icon={like} class={props.tweet.like ? "liked" : ""} action={() => props.likeAction(props.tweet.id)}/>
            <TweetAction icon={comment}/>
            <TweetAction icon={share}/>
            <TweetAction icon={bin} action={() => props.deleteAction(props.tweet.id)}/>
        </div>
    </div>;
}

export default TweetFunc;