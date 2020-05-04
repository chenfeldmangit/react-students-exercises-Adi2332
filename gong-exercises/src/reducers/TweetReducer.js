import {ADD_TWEET, DELETE_TWEET, LIKE_TWEET, SET_TWEETS} from "../actions/TweetActions";

const TweetReducer = function (state = [], action) {
    switch (action.type) {
        case ADD_TWEET:
            return [...state, action.tweet];

        case LIKE_TWEET:
            return state.map(tweet => tweet.id !== action.tweet.id ? tweet : {...tweet, like:!tweet.like});

        case DELETE_TWEET:
            return state.filter(tweet => tweet.id !== action.tweet.id);

        case SET_TWEETS:
            return action.tweetList;

        default:
            return state;
    }
};

export default TweetReducer;