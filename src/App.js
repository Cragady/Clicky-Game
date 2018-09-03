import React, { Component } from 'react';
import logo from './mousy-clickey.gif';
import ThePortrayer from "./components/ThePortrayer"
import './App.css'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="row">
            <h1 className="App-title col-xs-3 ml-4">Clicky Game</h1>
          </div>
          <div className="row">
            <img src={logo} className="App-logo col-xs-3 ml-4" alt="logo" />
          </div>
        </header>
        <p className="App-intro">
          Try to Click to the end!
        </p>
        <ThePortrayer />
      </div>
    );
  }
}

export default App;
