import * as React from "react";
import propTypes from 'prop-types';
import ProfileImg from "./ProfileImg";
import TweetAction from "./TweetAction";
import addImg from "../resources/add_img.svg"
import smile from "../resources/smile.svg"
import addLocation from "../resources/addLocation.svg"


class WriteTweet extends React.Component {

    constructor(props) {
        super(props);
        this.state = {textAreaVal: ""};
    }

    render() {
        return <div id="writeTweet">
            <div className="tweet-header">
                <ProfileImg/>
                <textarea rows="5" cols="150" id="writeTweetText" value={this.state.textAreaVal}
                          placeholder={"What's on your mind?"} onChange={this.getTextAreaValue}/>
            </div>
            <div className="tweet-actions">
                <div className="add-to-tweet">
                    <TweetAction icon={addImg}/>
                    <TweetAction icon={smile}/>
                    <TweetAction icon={addLocation}/>
                </div>
                <button className={"tweet-button" + (this.isDisabled() ? " disabled" : "")} onClick={this.addTweet}>
                    <label className="button-label">Tweet</label>
                </button>
            </div>
        </div>;
    }

    getTextAreaValue = (event) => {
        this.setState({textAreaVal: event.target.value})
    };

    isDisabled = () => {
        return this.state.textAreaVal.length < 3;
    };

    addTweet = () => {
        this.props.addTweetAction(this.state.textAreaVal);
        this.setState({textAreaVal: ""})
    };
}

WriteTweet.propTypes = {
    addTweetAction: propTypes.func.isRequired
};

export default WriteTweet;