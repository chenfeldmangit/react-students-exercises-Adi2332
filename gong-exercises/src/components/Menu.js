import * as React from "react";
import bird from "../resources/bird.svg";
import home from "../resources/home.svg";
import bell from "../resources/bell.svg";
import mail from "../resources/mail.svg";
import hashtag from "../resources/hashtag.svg";
import bookmark from "../resources/bookmark.svg";
import list from "../resources/list.svg";
import more from "../resources/more.svg";

import MenuItem from "./MenuItem";
import propTypes from "prop-types";

class Menu extends React.Component {

    render() {
        return (
            <div id="menu">
                <object data={bird} className="menu-icon"/>
                <MenuItem icon={home} label="Home" action={this.props.actions.loadStream}/>
                <MenuItem icon={hashtag} label="Explore"/>
                <MenuItem icon={bell} label="Notification"/>
                <MenuItem icon={mail} label="Messages"/>
                <MenuItem icon={bookmark} label="Bookmarks"/>
                <MenuItem icon={list} label="Lists"/>
                <MenuItem label="Profile" isProfileButton={true} action={this.props.actions.loadProfile}/>
                <MenuItem icon={more} label="More"/>
                <MenuItem label="Tweet" isTweetButton={true}/>
            </div>
        );
    }
}


Menu.propTypes = {
    actions: propTypes.object.isRequired
};


export default Menu;