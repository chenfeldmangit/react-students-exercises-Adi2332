import * as React from "react";
import propTypes from "prop-types";
import {TweetList} from "../dto/TweetList";
import {TweetDto} from "../dto/TweetDto";
import Tweet from "./Tweet";
import WriteTweet from "./WriteTweet";
import UseLocalStorage from "../Util/UseLocalStorage";

function Stream(props) {
    const [tweetList, setTweetList] = UseLocalStorage("tweetList", TweetList);
    const [nextTweetId, setNextTweetId] = UseLocalStorage("nextTweetId", Number);

    const likeAction = (id) => {
        tweetList.getTweetById(id).likeOrUnlikeTweet();
        setTweetList(new TweetList(tweetList.list));
    };

    const deleteAction = (id) => {
        tweetList.removeTweetById(id);
        setTweetList(new TweetList(tweetList.list));
    };

    const addAction = (text) => {
        tweetList.addTweet(new TweetDto(nextTweetId, text));
        setNextTweetId(nextTweetId + 1);
        setTweetList(new TweetList(tweetList.list));
    };

    return (
        <div id="stream">
            <h1 id="stream-title">Home</h1>
            <WriteTweet addTweetAction={addAction}/>
            {Array.from(tweetList.list).flatMap(tweet =>
                <Tweet tweet={tweet} likeAction={likeAction} deleteAction={deleteAction}/>)
            }
        </div>
    );
}

export default Stream;