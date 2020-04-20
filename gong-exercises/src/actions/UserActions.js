const signUp = (user) => {
    return {
        type: "SIGN_UP",
        user
    }
};

const signIn = (currentUser) => {
    return {
        type: "SIGN_IN",
        currentUser
    }
};

export {signUp, signIn};