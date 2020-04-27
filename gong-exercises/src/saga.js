import { put, call, takeEvery, all} from 'redux-saga/effects';
import {
    ADD_TWEET,
    ADD_TWEET_REQUEST,
    DELETE_TWEET,
    DELETE_TWEET_REQUEST,
    LIKE_TWEET,
    LIKE_TWEET_REQUEST
} from "./actions/TweetActions";
import TweetAPI from "./Util/TweetApi";


function* likeTweet(action) {
    try {
        yield call(TweetAPI.likeTweet, action.tweet.id);
        yield put({type: LIKE_TWEET, tweet:action.tweet});
    }
    catch (err) {
        console.log(`like tweet error ${err}`);
    }
}

function* waitForLikeTweet() {
    yield takeEvery(LIKE_TWEET_REQUEST, likeTweet);
}


function* addTweet(action) {
    try {
        yield call(TweetAPI.addTweet, action.tweet);
        yield put({type: ADD_TWEET, tweet:action.tweet});
    }
    catch (err) {
        console.log(`add tweet error ${err}`);
    }
}

function* waitForAddTweet() {
    yield takeEvery(ADD_TWEET_REQUEST, addTweet);
}

function* deleteTweet(action) {
    try {
        yield call(TweetAPI.deleteTweet, action.tweet.id);
        yield put({type: DELETE_TWEET, tweet:action.tweet});
    }
    catch (err) {
        console.log(`delete tweet error ${err}`);
    }
}

function* waitForDeleteTweet() {
    yield takeEvery(DELETE_TWEET_REQUEST, deleteTweet);
}

export default function* rootSaga() {
    yield all([
        waitForLikeTweet(),
        waitForAddTweet(),
        waitForDeleteTweet()
    ]);
}