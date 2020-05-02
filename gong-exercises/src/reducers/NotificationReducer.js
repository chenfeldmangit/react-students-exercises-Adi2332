import LocalStorageApi from "../Util/LocalStorageApi";
import {DELETE_NOTIFICATION, LIKE_NOTIFICATION} from "../actions/NotificationActions";

const init = LocalStorageApi.getJson("notificationList");

const NotificationReducer = function (state = init, action) {
    switch (action.type) {
        case LIKE_NOTIFICATION:
            return [...state, {type:"like", tweetId:action.tweetId}];

        case DELETE_NOTIFICATION:
            return state.filter(notification => notification.tweetId !== action.tweetId);

        default:
            return state;
    }
};

export default NotificationReducer;