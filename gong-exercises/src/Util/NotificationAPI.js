import LocalStorageApi from "./LocalStorageApi";

export default class NotificationAPI {

    static likeNotification = (tweetId) => {
        return new Promise((resolve, reject) => {
            try {
                const tweetLike = LocalStorageApi.getJson("tweetList")
                    .filter(tweet => tweet.id === tweetId)[0]
                    .like;
                if (tweetLike) {
                    const notificationList = LocalStorageApi.getJson("notificationList");
                    LocalStorageApi.setAsJson("notificationList", [...notificationList, {type: "like", tweetId}]);
                    resolve(true);
                }
                resolve(false);
            } catch (err) {
                reject(err);
            }
        })
    };


    static deleteNotification = (tweetId) => {
        return new Promise((resolve, reject) => {
            try {
                const notificationList = LocalStorageApi.getJson("notificationList");
                LocalStorageApi.setAsJson("notificationList", notificationList
                    .filter(notification => notification.tweetId !== tweetId));
                resolve('success');
            }
            catch (err) {
                reject(err);
            }
        })
    };
}