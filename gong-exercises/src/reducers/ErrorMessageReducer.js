import {HIDE_ERROR, SHOW_ERROR} from "../actions/ErreMessageActions";

const ErrorMessageReducer = function (state = {msg: undefined}, action) {
    switch (action.type) {
        case SHOW_ERROR:
            return {...state, msg: action.msg};

        case HIDE_ERROR:
            return {...state, msg: undefined};

        default:
            return state;
    }
};

export default ErrorMessageReducer;