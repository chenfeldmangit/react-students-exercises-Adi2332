import * as React from "react";
import {TweetList} from "../dto/TweetList";
import {TweetDto} from "../dto/TweetDto";
import Tweet from "./Tweet";
import {useState} from "react";
import WriteTweet from "./WriteTweet";
import {useEffect} from "react";
import LocalStorageApi from "../Util/LocalStorageApi";

function Stream(props) {
    const [tweetList, setTweetList] = useState(new TweetList(props.tweetList.list));
    const [nextTweetId, setNextTweetId] = useState(props.nextTweetId);

    useEffect(() => {
        LocalStorageApi.setAsJson("tweetList", tweetList);
    }, [tweetList]);

    useEffect(() => {
        LocalStorageApi.setInt("nextTweetId", nextTweetId);
    }, [nextTweetId]);

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