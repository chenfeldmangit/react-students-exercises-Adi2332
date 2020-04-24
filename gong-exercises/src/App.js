import React from 'react';
import './Style/style.scss';
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import {ProfileDto} from "./dto/ProfileDto";
import Stream from "./components/Stream";
import Menu from "./components/Menu";
import LoadMyApp from "./Util/LoadMyApp";
import Notifications from "./components/Notifications";
import UseLocalStorage from "./Util/UseLocalStorage";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from "react-redux";
import SignInOrUp from "./components/SignInOrUp";

LoadMyApp();

function App(props) {
    const [profile, setProfile] = UseLocalStorage("profile", ProfileDto);

    return (
        <BrowserRouter>
            <div className="App">
                {props.currentUser === undefined ? <SignInOrUp sign="in"/> :
                    <>
                        <Menu/>
                        <Switch>
                            <Route path="/" exact component={Stream}/>
                            <Route path="/notifications" component={Notifications}/>
                            <Route path="/profile" exact component={() => <Profile profile={profile}/>}/>
                            <Route path="/profile/edit" component={() =>
                                <>
                                    <Profile profile={profile}/>
                                    <EditProfile profile={profile}/>
                                </>
                            }/>
                        </Switch>
                        <div id="follow"/>
                    </>
                }
            </div>
        </BrowserRouter>
    );
}

const mapStateToProps = (store) => {
    return {
        currentUser: store.user.currentUser,
        users: store.user.users
    }
};

export default connect(mapStateToProps)(App);
