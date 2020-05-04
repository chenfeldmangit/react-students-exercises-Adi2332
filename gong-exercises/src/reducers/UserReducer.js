import {EDIT, SIGN_IN, SIGN_UP} from "../actions/UserActions";
import LocalStorageApi from "../Util/LocalStorageApi";

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const bio = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, asperiores assumenda beatae cupiditate dolorem, ea esse fugiat iure mollitia odio odit pariatur perspiciatis possimus qui repellendus sapiente sunt velit.";

let init = {
    currentUser: undefined,
    users: LocalStorageApi.getJson("users")
};

const UserReducer = function (state = init, action) {
    switch (action.type) {
        case SIGN_UP:
            if (state.users[action.user.username] === undefined) {
                const newUser = {
                    name: action.user.username,
                    password: action.user.password,
                    joinOn: `${monthNames[new Date().getMonth()]} ${new Date().getFullYear()}`,
                    following: 0,
                    followers: 0,
                    bio: bio
                };
                return {...state, users: {...state.users, [action.user.username]: newUser}, currentUser: newUser};
            }
            return state;

        case SIGN_IN:
            return {...state, currentUser: action.user.username};

        case EDIT:
            const user = {...state.users[state.currentUser], name: action.name, location: action.location, bio: action.bio};
            const users = JSON.parse(JSON.stringify(state.users));
            delete users[state.currentUser];
            return {...state, currentUser: action.name, users: {...users, [action.name]:user}};

        default:
            return state;
    }
};

export default UserReducer;