const ADD_TWEET = "ADD_TWEET";
const ADD_TWEET_REQUEST = "ADD_TWEET_REQUEST";
const LIKE_TWEET = "LIKE_TWEET";
const LIKE_TWEET_REQUEST = "LIKE_TWEET_REQUEST";
const DELETE_TWEET = "DELETE_TWEET";
const DELETE_TWEET_REQUEST = "DELETE_TWEET_REQUEST";
const SET_TWEETS = "SET_TWEETS";

const addTweet = (tweet) => {
    return {
        type: ADD_TWEET_REQUEST,
        tweet
    }
};

const likeTweet = (tweet) => {
    return {
        type: LIKE_TWEET_REQUEST,
        tweet
    }
};

const deleteTweet = (tweet) => {
    return {
        type: DELETE_TWEET_REQUEST,
        tweet
    }
};

export {
    addTweet,
    likeTweet,
    deleteTweet,
    ADD_TWEET,
    ADD_TWEET_REQUEST,
    LIKE_TWEET,
    LIKE_TWEET_REQUEST,
    DELETE_TWEET,
    DELETE_TWEET_REQUEST,
    SET_TWEETS
};