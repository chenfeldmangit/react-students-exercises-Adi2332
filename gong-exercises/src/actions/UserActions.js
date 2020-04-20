const signUp = (user) => {
    return {
        type: "SIGN_UP",
        user
    }
};

const signIn = (user) => {
    return {
        type: "SIGN_IN",
        user
    }
};

export {signUp, signIn};