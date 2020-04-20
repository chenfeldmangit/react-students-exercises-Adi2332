const UserReducer = function (state = [], action) {
    switch (action.type) {
        case "SIGN_UP":
            return [...state, action.user];
        case "SIGN_IN":
            return [...state, action.currentUser];
        default:
            return state;
    }
};

export default UserReducer;