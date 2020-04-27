import LocalStorageApi from "./LocalStorageApi";

export default class TweetAPI {

    static likeTweet = (tweetId) => {
        return new Promise((resolve, reject) => {
            try {
                const tweetList = LocalStorageApi.getJson("tweetList");
                LocalStorageApi.setAsJson("tweetList", tweetList.map(tweet => tweet.id !== tweetId ? tweet : {...tweet, like:!tweet.like}));
                resolve('success');
            }
            catch (err) {
                reject(err);
            }
        })
    };

    static addTweet = (tweet) => {
        return new Promise((resolve, reject) => {
            try {
                const tweetList = LocalStorageApi.getJson("tweetList");
                LocalStorageApi.setAsJson("tweetList", [...tweetList, tweet]);
                resolve('success');
            }
            catch (err) {
                reject(err);
            }
        })
    };

    static deleteTweet = (tweetId) => {
        return new Promise((resolve, reject) => {
            try {
                const tweetList = LocalStorageApi.getJson("tweetList");
                LocalStorageApi.setAsJson("tweetList", tweetList.filter(tweet => tweet.id !== tweetId));
                resolve('success');
            }
            catch (err) {
                reject(err);
            }
        })
    };
}