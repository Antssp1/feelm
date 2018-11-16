import React, { Component } from 'react';
import './App.css';
import BackButton from "./components/Back-button/index"

class App extends Component {
  render() {
    return (
      <div className="App">
        <BackButton />
      </div>
    );
  }
}

export default App;
