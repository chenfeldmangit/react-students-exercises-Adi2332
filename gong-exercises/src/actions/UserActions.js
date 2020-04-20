const SIGN_UP = "SIGN_UP";
const SIGN_IN = "SIGN_IN";

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

export {signUp, signIn, SIGN_UP, SIGN_IN};