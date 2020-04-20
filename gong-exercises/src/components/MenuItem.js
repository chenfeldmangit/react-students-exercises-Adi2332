import propTypes from 'prop-types';
import * as React from "react";
import ProfileImg from "./ProfileImg";
import {Link} from 'react-router-dom';

class MenuItem extends React.Component {

    render() {
        return (
            <Link to={this.props.to}>
                <button className={this.getClass()}>
                    {this.getButtonIcon()}
                    <label className="button-label">{this.props.label}</label>
                </button>
            </Link>
        );
    }

    getButtonIcon() {
        return <>
            {this.props.isTweetButton ? <></> :
                (this.props.isProfileButton ?
                    <ProfileImg class="button-icon"/> : <object data={this.props.icon} className="button-icon"/>)}
        </>;
    }

    getClass = () => {
        return "menu-button" + (this.props.isTweetButton ? " tweet-button" : "");
    }
}

MenuItem.propTypes = {
    label: propTypes.string.isRequired,
    icon: propTypes.string,
    isTweetButton: propTypes.bool,
    isProfileButton: propTypes.bool,
    to: propTypes.string
};

MenuItem.defaultProps = {
    isTweetButton: false,
    isProfileButton: false,
    icon: "",
    action: "/"
};

export default MenuItem;