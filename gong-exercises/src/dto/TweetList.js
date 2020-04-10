export class TweetList {
    constructor(list) {
        this.list = list;
    }

    addTweet(tweet) {
        this.list.splice(0, 0, tweet);
    }

    getTweetById(id) {
        return this.list.filter(tweet => tweet.id === parseInt(id))[0];
    }

    removeTweetById(id) {
        this.list = this.list.filter(tweet => tweet.id !== parseInt(id));
    }
}