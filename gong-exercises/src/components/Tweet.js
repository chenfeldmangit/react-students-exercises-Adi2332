import * as React from "react";
import propTypes from 'prop-types';
import ProfileImg from "./ProfileImg";
import TweetAction from "./TweetAction";
import like from "../resources/like.svg";
import comment from "../resources/comment.svg";
import share from "../resources/share.svg";
import bin from "../resources/bin.svg";


class Tweet extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="tweet" dataId={this.props.dataId}>
            <div className="tweet-header">
                <ProfileImg class="button-icon"/>
                <p className="tweet-title">title</p>
            </div>
            <p className="tweet-text">{this.props.text}</p>
            <div className="post-attachment"/>
            <div className="tweet-actions">
                <TweetAction icon={like} class={this.props.liked ? "liked" : ""} action={this.likeOrUnlike}/>
                <TweetAction icon={comment}/>
                <TweetAction icon={share}/>
                <TweetAction icon={bin} action={this.delete}/>
            </div>
        </div>;
    }

    likeOrUnlike = () => {
        this.props.likeAction(this.props.dataId);
    };

    delete = () => {
        this.props.deleteAction(this.props.dataId);
    };
}

Tweet.propTypes = {
    text: propTypes.string.isRequired,
    dataId: propTypes.number.isRequired,
    liked: propTypes.bool,
    likeAction: propTypes.func.isRequired,
    deleteAction: propTypes.func.isRequired
};

Tweet.defaultProps = {
    liked: false
};

export default Tweet;