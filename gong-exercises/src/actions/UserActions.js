const SIGN_UP = "SIGN_UP";
const SIGN_IN = "SIGN_IN";
const EDIT = "EDIT";

const signUp = (user) => {
    return {
        type: SIGN_UP,
        user
    }
};

const signIn = (user) => {
    return {
        type: SIGN_IN,
        user
    }
};

const editProfile = (name, location, bio) => {
    return {
        type: EDIT,
        name,
        location,
        bio
    }
};

export {signUp, signIn, editProfile, SIGN_UP, SIGN_IN, EDIT};