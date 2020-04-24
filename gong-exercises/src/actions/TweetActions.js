const ADD_TWEET = "ADD_TWEET";
const LIKE_TWEET = "LIKE_TWEET";
const DELETE_TWEET = "DELETE_TWEET";

const addTweet = (tweet) => {
    return {
        type: ADD_TWEET,
        tweet
    }
};

const likeTweet = (tweet) => {
    return {
        type: LIKE_TWEET,
        tweet
    }
};

const deleteTweet = (tweet) => {
    return {
        type: DELETE_TWEET,
        tweet
    }
};

export {addTweet, likeTweet, deleteTweet, ADD_TWEET, LIKE_TWEET, DELETE_TWEET};