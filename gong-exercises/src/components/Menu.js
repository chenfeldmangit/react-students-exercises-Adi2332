import bird from "../resources/bird.svg";
import MenuItem from "./MenuItem";
import home from "../resources/home.svg";
import hashtag from "../resources/hashtag.svg";
import bell from "../resources/bell.svg";
import mail from "../resources/mail.svg";
import bookmark from "../resources/bookmark.svg";
import list from "../resources/list.svg";
import more from "../resources/more.svg";
import * as React from "react";


function Menu(props) {

    return (
        <div id="menu">
            <object data={bird} className="menu-icon"/>
            <MenuItem icon={home} label="Home" to="/"/>
            <MenuItem icon={hashtag} label="Explore"/>
            <MenuItem icon={bell} label="Notifications" to="/notifications"/>
            <MenuItem icon={mail} label="Messages"/>
            <MenuItem icon={bookmark} label="Bookmarks"/>
            <MenuItem icon={list} label="Lists"/>
            <MenuItem label="Profile" isProfileButton={true} to="/profile"/>
            <MenuItem icon={more} label="More"/>
            <MenuItem label="Tweet" isTweetButton={true}/>
        </div>
    );
}

export default Menu;