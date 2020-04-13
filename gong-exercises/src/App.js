import React, {useEffect, useState} from 'react';
import './Style/style.scss';
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import {ProfileDto} from "./dto/ProfileDto";
import {TweetList} from "./dto/TweetList";
import Stream from "./components/Stream";
import Menu from "./components/Menu";
import LocalStorageApi from "./Util/LocalStorageApi";
import LoadMyApp from "./Util/LoadMyApp";
import Notifications from "./components/Notifications";
import {NotificationList} from "./dto/NotificationList";
import UseLocalStorage from "./Util/UseLocalStorage";

LoadMyApp();

function App() {
    const [state, setState] = useState("stream");
    const menuActions = {
        loadNotifications: () => setState("notifications"),
        loadProfile: () => setState("profile"),
        loadStream: () => setState("stream")
    };

    const [profile, setProfile] = UseLocalStorage("profile", ProfileDto);

    return (
        <div className="App">
            <Menu actions={menuActions}/>
            {state === "stream" ? <Stream/>
                : (state === "notifications" ? <Notifications/>
                        : <Profile profile={profile} backAction={menuActions.loadStream}editAction={() => setState("edit")}/>
                )
            }
            {state === "edit" ?
                <EditProfile closeAction={menuActions.loadProfile} profile={profile} saveAction={menuActions.loadProfile}/> : <></>}
            <div id="follow"/>
        </div>
    );
}

export default App;
