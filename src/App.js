import React, { Component } from 'react';
import './App.css';
import BlockWorld from './views/BlockWorld'

class App extends Component {
  render() {
    return (
      <div className="app">
        <BlockWorld />
      </div>
    );
  }
}

export default App;
