import React, { Component } from 'react';
import { observer } from 'mobx-react';
import CounterStore from './store'
import logo from './logo.svg';
import './App.css';

const store = CounterStore

@observer class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <h1>{ store.count }</h1>
          <button onClick={ () => store.increment() }>+</button>
          <button onClick={ () => store.decrement() }>-</button> 
        </div>
      </div>
    );
  }
}

export default App;
