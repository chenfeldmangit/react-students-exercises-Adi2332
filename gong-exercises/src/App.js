import React from 'react';
import './Style/css/style.css';
import Menu from "./components/Menu";
import Stream from "./components/Stream";


function App() {
  return (
    <div className="App">
      <Menu/>
      <Stream/>
      <div id="follow"/>
    </div>
  );
}

export default App;
