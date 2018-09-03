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
            <h1 className="App-title col-xs-6 col-md-3">Clicky Game</h1>
          </div>
          <div className="row">
            <div className="col-xs-6 col-md-3">
              <img src={logo} className="App-logo col-xs-3" alt="logo" />
            </div>
          </div>
        </header>
        <p className="App-intro">
          Try to Click to the end!
          <br />
          No repeats!
        </p>
        <ThePortrayer />
      </div>
    );
  }
}

export default App;
