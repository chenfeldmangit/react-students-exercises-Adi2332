import * as React from "react";
import {useState} from "react";
import bird from "../resources/bird.svg";
import {Link} from "react-router-dom";

function SignInOrUp(props) {

    const [sign, setSign] = useState(props.sign);
    const [state, setState] = useState({
        username: "",
        password: ""
    });

    const handleChange = (event) => {
        setState({...state, [event.target.id]: event.target.value});
    };

    function getClassName() {
        return "sign-button" + (state.username.length === 0 || state.password.length === 0 ? " disabled" : "");
    }

    return (
        <div id="SignInOrUp">
            <object data={bird}/>
            <form id="logInForm" method="post" onSubmit={(event) => event.preventDefault()}>
                <div className="input">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={state.username} onInput={handleChange}/>
                </div>

                <div className="input">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={state.password} onInput={handleChange}/>
                </div>

                <button className={getClassName()}>
                    <label className="button-label">{sign === "up" ? "Sign Up" : "Log In"}</label>
                </button>
            </form>
            <Link className="link" onClick={() => setSign(sign === "in" ? "up" : "in")} to="">{sign === "in" ? "Sign Up" : "Log In"}</Link>
        </div>
    );


}

export default SignInOrUp;