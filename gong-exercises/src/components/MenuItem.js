import propTypes from 'prop-types';
import * as React from "react";

class MenuItem extends React.Component {

    render() {
        return (
            <button className={this.getClass()}>
                {this.props.isTweetButton ? <></> : <object data={this.props.icon} className="button-icon"/>}
                <label className="button-label">{this.props.label}</label>
            </button>
        );
    }

    getClass = () => {
        return "menu-button" + (this.props.isTweetButton ? " tweet-button" : "");
    }
}

MenuItem.propTypes = {
    label: propTypes.string.isRequired,
    icon: propTypes.string,
    isTweetButton: propTypes.bool
};

MenuItem.defaultProps = {
    isTweetButton: false
};

export default MenuItem;