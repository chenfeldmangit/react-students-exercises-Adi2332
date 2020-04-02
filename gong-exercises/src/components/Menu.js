import * as React from "react";
import home from "../resources/home.svg";
import bell from "../resources/bell.svg";
import mail from "../resources/mail.svg";
import hashtag from "../resources/hashtag.svg";
import bookmark from "../resources/bookmark.svg";
import list from "../resources/list.svg";
import more from "../resources/more.svg";

import MenuItem from "./MenuItem";

class Menu extends React.Component {

    render() {
        return (
            <div id="menu">
                <MenuItem icon={home} label="Home"/>
                <MenuItem icon={hashtag} label="Explore"/>
                <MenuItem icon={bell} label="Notification"/>
                <MenuItem icon={mail} label="Messages"/>
                <MenuItem icon={bookmark} label="Bookmarks"/>
                <MenuItem icon={list} label="Lists"/>
                {/*<MenuItem icon={list} label="Profile"/>*/}
                <MenuItem icon={more} label="More"/>
                <MenuItem label="Tweet" isTweetButton={true}/>
            </div>
        );
    }
}


export default Menu;