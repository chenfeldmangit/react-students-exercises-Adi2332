import React from 'react';
// import './App.css';
import './Style/css/style.css';
import Menu from "./components/Menu";


function App() {
  return (
    <div className="App">
      <Menu/>
      <div id="stream"/>
      <div id="follow"/>
    </div>
  );
}

export default App;
