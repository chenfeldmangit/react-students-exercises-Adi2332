import {put, call, takeEvery, all, select, fork} from 'redux-saga/effects';
import {
    ADD_TWEET,
    ADD_TWEET_REQUEST,
    DELETE_TWEET,
    DELETE_TWEET_REQUEST,
    LIKE_TWEET,
    LIKE_TWEET_REQUEST, SET_TWEETS
} from "./actions/TweetActions";
import TweetAPI from "./Util/TweetApi";
import NotificationAPI from "./Util/NotificationAPI";
import {DELETE_NOTIFICATION, LIKE_NOTIFICATION, SET_NOTIFICATIONS} from "./actions/NotificationActions";
import {SIGN_IN, SIGN_IN_REQUEST} from "./actions/UserActions";
import UserAPI from "./Util/UserAPI";
import LocalStorageApi from "./Util/LocalStorageApi";


function* likeTweet(action) {
    try {
        yield call(TweetAPI.likeTweet, action.tweet.id);
        yield put({type: LIKE_TWEET, tweet: action.tweet});
    } catch (err) {
        console.log(`like tweet error ${err}`);
    }
}

function* addNotification(action) {
    try {
        const success = yield call(NotificationAPI.likeNotification, action.tweet.id);
        if (success) {
            yield put({type: LIKE_NOTIFICATION, tweetId: action.tweet.id});
        }
    } catch (err) {
        console.log(`notification like tweet error ${err}`);
    }
}

function* waitForLikeTweet() {
    yield takeEvery(LIKE_TWEET_REQUEST, likeTweet);
    yield takeEvery(LIKE_TWEET_REQUEST, addNotification);
}


function* addTweet(action) {
    try {
        yield call(TweetAPI.addTweet, action.tweet);
        yield put({type: ADD_TWEET, tweet: action.tweet});
    } catch (err) {
        console.log(`add tweet error ${err}`);
    }
}

function* waitForAddTweet() {
    yield takeEvery(ADD_TWEET_REQUEST, addTweet);
}

function* deleteTweet(action) {
    try {
        yield call(TweetAPI.deleteTweet, action.tweet.id);
        yield put({type: DELETE_TWEET, tweet: action.tweet});
    } catch (err) {
        console.log(`delete tweet error ${err}`);
    }
}

function* deleteNotification(action) {
    try {
        yield call(NotificationAPI.deleteNotification, action.tweet.id);
        yield put({type: DELETE_NOTIFICATION, tweetId: action.tweet.id});
    } catch (err) {
        console.log(`notification delete tweet error ${err}`);
    }
}

function* waitForDeleteTweet() {
    yield takeEvery(DELETE_TWEET_REQUEST, deleteTweet);
    yield takeEvery(DELETE_TWEET_REQUEST, deleteNotification);
}

function* signIn(action) {
    try {
        const users = yield select(state => state.user.users);
        const success = yield call(UserAPI.signIn, users, action.user.username, action.user.password);
        if (success)
            yield put({type: SIGN_IN, user: action.user});
    } catch (err) {
        console.log(`sign in error ${err}`);
    }
}

function* waitForSignInRequest() {
    yield takeEvery(SIGN_IN_REQUEST, signIn);
}


function* fetchTweets() {
   const tweetList = LocalStorageApi.getJson("tweetList");
   yield put({type: SET_TWEETS, tweetList});
}

function* fetchNotifications() {
    const notificationList = LocalStorageApi.getJson("notificationList");
    yield put({type: SET_NOTIFICATIONS, notificationList});
}

function* fetchAppData(action) {
    try {
        yield fork(fetchTweets);
        yield fork(fetchNotifications);
    } catch (err) {
        console.log(`fetchAppData in error ${err}`);
    }
}

function* waitForSignIn() {
    yield takeEvery(SIGN_IN, fetchAppData);
}

export default function* rootSaga() {
    yield all([
        waitForLikeTweet(),
        waitForAddTweet(),
        waitForDeleteTweet(),
        waitForSignInRequest(),
        waitForSignIn()
    ]);
}