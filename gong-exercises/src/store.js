import {createStore, combineReducers, applyMiddleware} from "redux";
import UserReducer from "./reducers/UserReducer";
import TweetReducer from "./reducers/TweetReducer";
import createSagaMiddleware from "redux-saga";
import {composeWithDevTools} from "redux-devtools-extension";
import rootSaga from "./saga";
import NotificationReducer from "./reducers/NotificationReducer";
import ErrorMessageReducer from "./reducers/ErrorMessageReducer";

const combinedReducers = combineReducers({
    tweetList: TweetReducer,
    user: UserReducer,
    notificationList: NotificationReducer,
    errorMessage: ErrorMessageReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combinedReducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));


sagaMiddleware.run(rootSaga);

export default store;