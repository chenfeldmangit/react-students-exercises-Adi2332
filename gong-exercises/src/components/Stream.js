import * as React from "react";
import WriteTweet from "./WriteTweet";

class Stream extends React.Component {

    render() {
        return (
            <div id="stream">
                <WriteTweet/>
            </div>
        );
    }
}


export default Stream;