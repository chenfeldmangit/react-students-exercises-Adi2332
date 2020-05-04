import * as React from "react";
import {connect} from "react-redux";


function ErrorMessage(props) {

    return (
        <div className="dialog">
            <dialog open id="errorMessage">
                <h1>{props.errorMessage}</h1>
            </dialog>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        errorMessage: state.errorMessage.msg
    }
};

export default connect(mapStateToProps)(ErrorMessage);
