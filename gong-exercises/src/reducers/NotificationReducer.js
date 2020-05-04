import {DELETE_NOTIFICATION, LIKE_NOTIFICATION, SET_NOTIFICATIONS} from "../actions/NotificationActions";

const NotificationReducer = function (state = [], action) {
    switch (action.type) {
        case LIKE_NOTIFICATION:
            return [...state, {type:"like", tweetId:action.tweetId}];

        case DELETE_NOTIFICATION:
            return state.filter(notification => notification.tweetId !== action.tweetId);

        case SET_NOTIFICATIONS:
            return action.notificationList;

        default:
            return state;
    }
};

export default NotificationReducer;