import propTypes from 'prop-types';
import * as React from "react";
import ProfileImg from "./ProfileImg";

class MenuItem extends React.Component {

    render() {
        return (
            <button className={this.getClass()} onClick={this.props.action}>
                {this.getButtonIcon()}
                <label className="button-label">{this.props.label}</label>
            </button>
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
    action: propTypes.func
};

MenuItem.defaultProps = {
    isTweetButton: false,
    isProfileButton: false,
    action: () => {}
};

export default MenuItem;