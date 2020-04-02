import * as React from "react";
import WriteTweet from "./WriteTweet";
import Tweet from "./Tweet";

class Stream extends React.Component {

    render() {
        return (
            <div id="stream">
                <h1 id="stream-title">Home</h1>
                <WriteTweet/>
                <Tweet dataId={1} text="sfsf"/>
            </div>
        );
    }
}


export default Stream;