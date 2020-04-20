import * as React from "react";
import {useState} from "react";
import bird from "../resources/bird.svg";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {signIn, signUp} from "../actions/UserActions";

function SignInOrUp(props) {

    const [sign, setSign] = useState(props.sign);
    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const handleChange = (event) => {
        setUser({...user, [event.target.id]: event.target.value});
    };

    function getClassName() {
        return "sign-button" + (user.username.length === 0 || user.password.length === 0 ? " disabled" : "");
    }

    function ifUpElse(up, _else) {
        if (sign === "up")
            return up;
        return _else;
    }

    return (
        <div id="SignInOrUp">
            <object data={bird}/>
            <form id="logInForm" method="post" onSubmit={(event) => event.preventDefault()}>
                <div className="input">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={user.username} onChange={handleChange}/>
                </div>

                <div className="input">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={user.password} onChange={handleChange}/>
                </div>

                <button className={getClassName()}onClick={ifUpElse(() => props.signUp(user), () => props.signIn(user))}>
                    <label className="button-label">{ifUpElse("Sign Up", "Log In")}</label>
                </button>
            </form>
            <Link className="link" onClick={() => setSign(ifUpElse("in", "up"))} to="">{ifUpElse("Log In", "Sign Up")}</Link>
        </div>
    );
}

const mapStateToProps = (store) => {
    return {
        currentUser: store.currentUser,
        users: store.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: user => dispatch(signUp(user)),
        signIn: user => dispatch(signIn(user))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInOrUp);