const UserReducer = function (state = [{
    currentUser: undefined,
    user : {username: "adi", password: "pass"}
}], action) {
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