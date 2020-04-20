const UserReducer = function (state = {
    currentUser: undefined,
    users: {"adi": "pass"}
}, action) {
    switch (action.type) {
        case "SIGN_UP":
            return {...state, users:{...state.users, [action.user.username]:action.user.password}, currentUser: action.user.username};
        case "SIGN_IN":
            if (state.users[action.user.username] === action.user.password)
                return {...state, currentUser: action.user.username};
        default:
            return state;
    }
};

export default UserReducer;