import * as React from "react";
import propTypes from 'prop-types';
import ProfileImg from "./ProfileImg";
import TweetAction from "./TweetAction";
import like from "../resources/like.svg";
import comment from "../resources/comment.svg";
import share from "../resources/share.svg";
import bin from "../resources/bin.svg";
import {TweetDto} from "../dto/TweetDto";


class Tweet extends React.Component {

    render() {
        return <div className="tweet" dataid={this.props.tweet.id}>
            <div className="tweet-header">
                <ProfileImg class="button-icon"/>
                <p className="tweet-title">title</p>
            </div>
            <p className="tweet-text">{this.props.tweet.text}</p>
            <div className="post-attachment"/>
            <div className="tweet-actions">
                <TweetAction icon={like} class={this.props.tweet.like ? "liked" : ""} action={this.likeOrUnlike}/>
                <TweetAction icon={comment}/>
                <TweetAction icon={share}/>
                <TweetAction icon={bin} action={this.delete}/>
            </div>
        </div>;
    }

    likeOrUnlike = () => {
        this.props.likeAction(this.props.tweet.id);
    };

    delete = () => {
        this.props.deleteAction(this.props.tweet.id);
    };
}

Tweet.propTypes = {
    tweet: propTypes.instanceOf(TweetDto).isRequired,
    likeAction: propTypes.func.isRequired,
    deleteAction: propTypes.func.isRequired
};

Tweet.defaultProps = {
    liked: false
};

export default Tweet;