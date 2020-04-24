import React from 'react';
import './Style/style.scss';
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import Stream from "./components/Stream";
import Menu from "./components/Menu";
import LoadMyApp from "./Util/LoadMyApp";
import Notifications from "./components/Notifications";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from "react-redux";
import SignInOrUp from "./components/SignInOrUp";

LoadMyApp();

function App(props) {
    return (
        <BrowserRouter>
            <div className="App">
                {props.currentUser === undefined ? <SignInOrUp sign="in"/> :
                    <>
                        <Menu/>
                        <Switch>
                            <Route path="/" exact component={Stream}/>
                            <Route path="/notifications" component={Notifications}/>
                            <Route path="/profile" exact component={Profile}/>}/>
                            <Route path="/profile/edit" component={() =>
                                <>
                                    <Profile/>
                                    <EditProfile/>
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
