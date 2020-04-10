import React, {useState} from 'react';
import './Style/css/style.css';
import Menu from "./components/Menu";
import Stream from "./components/Stream";
import Profile from "./components/Profile";
import {ProfileDto} from "./dto/ProfileDto";

function App() {
    const [state, setState] = useState("stream");
    const [profile, setProfile] = useState(new ProfileDto("Adi", 3, "Tel Aviv", "March 2020",
        152, 2548, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, " +
        "asperiores assumenda beatae cupiditate dolorem, ea esse fugiat iure mollitia odio odit pariatur perspiciatis " +
        "possimus qui repellendus sapiente sunt velit."));

    const actions ={
        loadProfile: () => setState("profile"),
        loadStream: () => setState("stream")
    };

    return (
        <div className="App">
            <Menu actions={actions}/>
            {state === "stream" ? <Stream/>: <Profile profile={profile} back={() => setState("stream")}/>}
            <div id="follow"/>
        </div>
    );
}

export default App;
