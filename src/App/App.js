import React, { Component } from 'react';
import './App.css';

import CardWrapper from '../CardWrapper/CardWrapper'


class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome To Headcount 2.0</h1>
        <CardWrapper />
      </div>
    );
  }
}

export default App;
