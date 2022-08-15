import React, { Component } from 'react';
import './App.css';
import FunctionalComponents from './components/FunctionalComponent';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          components go here
          <FunctionalComponents/>
        </header>
      </div>
    );
  }
}

export default App;
