import { put, call, takeEvery, all} from 'redux-saga/effects';
import {LIKE_TWEET, LIKE_TWEET_REQUEST} from "./actions/TweetActions";
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

export default function* rootSaga() {
    yield all([
        waitForLikeTweet()
    ]);
}