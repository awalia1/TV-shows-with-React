import React, { Component } from 'react';
import Intro from '../Intro';
import Shows from '../Shows';
import 'whatwg-fetch';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">T.V. Series List</h1>
        </header>
        <Intro message = "Here you can find your favorite shows."/>
        <Shows />
      </div>
    );
  }
}

export default App;
