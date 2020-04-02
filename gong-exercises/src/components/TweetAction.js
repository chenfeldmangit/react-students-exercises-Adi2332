import * as React from "react";
import propTypes from "prop-types";
import MenuItem from "./MenuItem";


class TweetAction extends React.Component {

    render() {
        return <button className="tweet-action">
            <object data={this.props.icon}/>
        </button>;
    }
}


TweetAction.propTypes = {
    icon: propTypes.string.isRequired
};


export default TweetAction;