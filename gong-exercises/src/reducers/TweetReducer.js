import {ADD_TWEET, DELETE_TWEET, LIKE_TWEET} from "../actions/TweetActions";
import LocalStorageApi from "../Util/LocalStorageApi";

const init = LocalStorageApi.getJson("tweetList");

const TweetReducer = function (state = init, action) {
    switch (action.type) {
        case ADD_TWEET:
            return [...state, action.tweet];

        case LIKE_TWEET:
            return state.map(tweet => tweet.id !== action.tweet.id ? tweet : {...tweet, like:!tweet.like});

        case DELETE_TWEET:
            return state.filter(tweet => tweet.id !== action.tweet.id);

        default:
            return state;
    }
};

export default TweetReducer;