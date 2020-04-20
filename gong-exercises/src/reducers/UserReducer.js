import {SIGN_IN, SIGN_UP} from "../actions/UserActions";

let init = {
    currentUser: undefined,
    users: {"adi": "pass"}
};

const UserReducer = function (state = init, action) {
    switch (action.type) {
        case SIGN_UP:
            if (state.users[action.user.username] === undefined)
                return {
                    ...state,
                    users: {...state.users, [action.user.username]: action.user.password},
                    currentUser: action.user.username
                };
            return state;

        case SIGN_IN:
            if (state.users[action.user.username] === action.user.password)
                return {...state, currentUser: action.user.username};
            return state;

        default:
            return state;
    }
};

export default UserReducer;