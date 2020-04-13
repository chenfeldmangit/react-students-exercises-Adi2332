import React, {useEffect, useState} from 'react';
import './Style/style.scss';
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import {ProfileDto} from "./dto/ProfileDto";
import {TweetList} from "./dto/TweetList";
import StreamFunc from "./components/function/StreamFunc";
import MenuFunc from "./components/function/MenuFunc";
import LocalStorageApi from "./Util/LocalStorageApi";
import LoadMyApp from "./Util/LoadMyApp";

LoadMyApp();

function App() {
    const [state, setState] = useState("stream");
    const menuActions = {
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
    },[profile]);

    return (
        <div className="App">
            <MenuFunc actions={menuActions}/>
            {state === "stream" ? <StreamFunc tweetList={tweetList} nextTweetId={nextTweetId}/>
                : <Profile profile={profile} backAction={menuActions.loadStream} editAction={() => setState("edit")}/>}
            {state === "edit" ?
                <EditProfile closeAction={menuActions.loadProfile} profile={profile} saveAction={saveAction}/> : <></>}
            <div id="follow"/>
        </div>
    );
}

export default App;
