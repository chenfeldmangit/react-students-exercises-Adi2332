import {createStore, combineReducers} from "redux";
import UserReducer from "./reducers/UserReducer";
import TweetReducer from "./reducers/TweetReducer";

const combinedReducers = combineReducers({
    tweetList: TweetReducer,
    user: UserReducer,
});


const store = createStore(combinedReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;