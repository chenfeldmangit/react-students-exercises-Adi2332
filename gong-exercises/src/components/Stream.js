import * as React from "react";
import WriteTweet from "./WriteTweet";
import Tweet from "./Tweet";
import propTypes from "prop-types";
import {TweetList} from "../dto/TweetList";
import {TweetDto} from "../dto/TweetDto";

class Stream extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tweetList: props.tweetList,
            nextTweetId: props.tweetList.list.length + 1
        };
    }

    render() {
        return (
            <div id="stream">
                <h1 id="stream-title">Home</h1>
                <WriteTweet addTweetAction={this.addAction}/>
                {Array.from(this.state.tweetList.list).flatMap(tweet =>
                    <Tweet dataId={tweet.id} text={tweet.text} liked={tweet.like}
                           likeAction={this.likeAction} deleteAction={this.deleteAction}/>)
                }
            </div>
        );
    }

    likeAction = (id) => {
        this.state.tweetList.getTweetById(id).likeOrUnlikeTweet();
        this.setState((state, props) => ({
            tweetList: state.tweetList,
        }));
    };

    deleteAction = (id) => {
        this.state.tweetList.removeTweetById(id);
        this.setState((state, props) => ({
            tweetList: state.tweetList,
        }));
    };

    addAction = (text) => {
        this.state.tweetList.addTweet(new TweetDto(this.state.nextTweetId, text));
        this.setState((state, props) => ({
            tweetList: state.tweetList,
            nextTweetId: state.nextTweetId + 1
        }));
    };

}

Stream.propTypes = {
    tweetList: propTypes.instanceOf(TweetList).isRequired,
};


export default Stream;