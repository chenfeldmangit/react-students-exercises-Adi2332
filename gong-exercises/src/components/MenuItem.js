import propTypes from 'prop-types';
import * as React from "react";

class MenuItem extends React.Component {

    render() {
        return (
            <button className={this.getClass()}>
                {this.getButtonIcon()}
                <label className="button-label">{this.props.label}</label>
            </button>
        );
    }

    getButtonIcon() {
        return <>
            {this.props.isTweetButton ? <></> :
                (this.props.isProfileButton ?
                    <img src={this.props.icon} className="button-icon profile-img" alt="profile image"/> :
                    <object data={this.props.icon} className="button-icon"/>)}
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
    isProfileButton: propTypes.bool
};

MenuItem.defaultProps = {
    isTweetButton: false,
    isProfileButton: false
};

export default MenuItem;