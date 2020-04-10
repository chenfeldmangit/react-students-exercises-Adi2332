import * as React from "react";
import WriteTweet from "./WriteTweet";
import Tweet from "./Tweet";
import propTypes from "prop-types";
import {TweetList} from "../dto/TweetList";

class Stream extends React.Component {

    constructor(props) {
        super(props);
        this.state = {tweetList: props.tweetList};
    }

    render() {
        return (
            <div id="stream">
                <h1 id="stream-title">Home</h1>
                <WriteTweet/>
                {Array.from(this.state.tweetList.list).flatMap(tweet =>
                    <Tweet dataId={tweet.id} text={tweet.text} liked={tweet.like} likeAction={this.likeAction}/>)
                }
            </div>
        );
    }

    likeAction = (id) => {
        this.state.tweetList.getTweetById(id).likeOrUnlikeTweet();
    }
}

Stream.propTypes = {
    tweetList: propTypes.instanceOf(TweetList).isRequired,
};


export default Stream;