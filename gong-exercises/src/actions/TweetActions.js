const ADD_TWEET = "ADD_TWEET";
const LIKE_TWEET = "LIKE_TWEET";
const LIKE_TWEET_REQUEST = "LIKE_TWEET_REQUEST";
const DELETE_TWEET = "DELETE_TWEET";

const addTweet = (tweet) => {
    return {
        type: ADD_TWEET,
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
        type: DELETE_TWEET,
        tweet
    }
};

export {addTweet, likeTweet, deleteTweet, ADD_TWEET, LIKE_TWEET, LIKE_TWEET_REQUEST, DELETE_TWEET};