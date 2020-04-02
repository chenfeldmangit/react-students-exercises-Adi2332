import * as React from "react";
import propTypes from "prop-types";
import profileImg from "../resources/profile.png";

class ProfileImg extends React.Component {

    render() {
        return <img src={profileImg} className={this.props.class + " profile-img"} alt="profile image"/>;
    }

}

ProfileImg.propTypes = {
    class: propTypes.string
};

ProfileImg.defaultProps = {
    class: ""
};

export default ProfileImg;