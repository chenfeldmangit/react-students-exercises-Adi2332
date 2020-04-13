import * as React from "react";
import WriteTweet from "../WriteTweet";
import {TweetList} from "../../dto/TweetList";
import {TweetDto} from "../../dto/TweetDto";
import TweetFunc from "./TweetFunc";
import {useState} from "react";
import WriteTweetFunc from "./WriteTweetFunc";


function StreamFunc(props) {
    const [tweetList, setTweetList] = useState(new TweetList(props.tweetList.list));
    const [nextTweetId, setNextTweetId] = useState(props.tweetList.list.length + 1);

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
            <WriteTweetFunc addTweetAction={addAction}/>
            {Array.from(tweetList.list).flatMap(tweet =>
                <TweetFunc tweet={tweet} likeAction={likeAction} deleteAction={deleteAction}/>)
            }
        </div>
    );
}

export default StreamFunc;