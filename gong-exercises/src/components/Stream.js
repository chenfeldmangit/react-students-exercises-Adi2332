import * as React from "react";
import WriteTweet from "./WriteTweet";

class Stream extends React.Component {

    render() {
        return (
            <div id="stream">
                <h1 id="stream-title">Home</h1>
                <WriteTweet/>
            </div>
        );
    }
}


export default Stream;