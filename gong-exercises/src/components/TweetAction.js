import * as React from "react";
import propTypes from "prop-types";


class TweetAction extends React.Component {

    render() {
        return <button className={"tweet-action " + this.props.class} onClick={this.props.action}>
            <object data={this.props.icon}/>
        </button>;
    }
}


TweetAction.propTypes = {
    icon: propTypes.string.isRequired,
    class: propTypes.string
};

TweetAction.defaultProps = {
    class: ""
};

export default TweetAction;