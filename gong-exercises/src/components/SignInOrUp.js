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

    return (
        <div id="SignInOrUp">
            <object data={bird}/>
            <form id="logInForm" method="post" onSubmit={(event) => event.preventDefault()}>
                <div className="input">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={user.username} onInput={handleChange}/>
                </div>

                <div className="input">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={user.password} onInput={handleChange}/>
                </div>

                <button className={getClassName()} onClick={sign === "up" ? () => props.signUp(user) : () => props.signIn(user)}>
                    <label className="button-label">{sign === "up" ? "Sign Up" : "Log In"}</label>
                </button>
            </form>
            <Link className="link" onClick={() => setSign(sign === "in" ? "up" : "in")} to="">{sign === "in" ? "Sign Up" : "Log In"}</Link>
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