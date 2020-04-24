import * as React from "react";
import Tweet from "./Tweet";
import WriteTweet from "./WriteTweet";
import {connect} from "react-redux";
import {addTweet, deleteTweet, likeTweet} from "../actions/TweetActions";
import UseLocalStorage from "../Util/UseLocalStorage";

function Stream(props) {
    const [nextTweetId, setNextTweetId] = UseLocalStorage("nextTweetId", Number);

    const addAction = (text) => {
        setNextTweetId(nextTweetId + 1);
        props.addTweet({id: nextTweetId, text:text, like: false});
    };

    return (
        <div id="stream">
            <h1 id="stream-title">Home</h1>
            <WriteTweet addTweetAction={addAction}/>
            {Object.keys(props.tweetList).reverse().map(key =>
                <Tweet key={key} tweet={props.tweetList[key]} likeAction={props.likeTweet} deleteAction={props.deleteTweet}/>
            )}
        </div>
    );
}

const mapStateToProps = (store) => {
    return {
        ...store.tweetList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTweet: tweet => dispatch(addTweet(tweet)),
        likeTweet: tweet => dispatch(likeTweet(tweet)),
        deleteTweet: tweet => dispatch(deleteTweet(tweet))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Stream);