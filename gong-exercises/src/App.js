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

LoadMyApp();

function App() {
    const [profile, setProfile] = UseLocalStorage("profile", ProfileDto);

    return (
        <BrowserRouter>
            <div className="App">
                <Menu/>
                <Switch>
                    <Route path="/" component={Stream} exact/>
                    <Route path="/notifications" component={Notifications}/>
                    <Route path="/profile" component={() => <Profile profile={profile}/>}/>
                    <Route path="/edit" component={() =>
                        <>
                            <Profile profile={profile}/>
                            <EditProfile profile={profile}/>
                        </>
                    }/>
                </Switch>
                <div id="follow"/>
            </div>
        </BrowserRouter>
    );
}

export default App;
