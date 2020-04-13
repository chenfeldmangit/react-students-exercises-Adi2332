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

LoadMyApp();

function App() {
    const [state, setState] = useState("stream");
    const menuActions = {
        loadNotifications: () => setState("notifications"),
        loadProfile: () => setState("profile"),
        loadStream: () => setState("stream")
    };

    const tweetList = LocalStorageApi.getInstantOfClass("tweetList", TweetList);
    const nextTweetId = LocalStorageApi.getInt("nextTweetId");

    const [profile, setProfile] = useState(LocalStorageApi.getInstantOfClass("profile", ProfileDto));
    const saveAction = (newProfile) => {
        setProfile(ProfileDto.fromJson(newProfile));
        menuActions.loadProfile();
    };
    useEffect(() => {
        LocalStorageApi.setAsJson("profile", profile);
    }, [profile]);

    return (
        <div className="App">
            <Menu actions={menuActions}/>
            {state === "stream" ? <Stream tweetList={tweetList} nextTweetId={nextTweetId}/>
                : (state === "notifications" ? <Notifications/>
                        : <Profile profile={profile} backAction={menuActions.loadStream}
                                   editAction={() => setState("edit")}/>
                )
            }
            {state === "edit" ?
                <EditProfile closeAction={menuActions.loadProfile} profile={profile} saveAction={saveAction}/> : <></>}
            <div id="follow"/>
        </div>
    );
}

export default App;
