'use strict';

import React, { Component } from 'react';

import Homepage from './pages/home/home.js';
import '../scss/main.scss';


class App extends Component {
  render(){
    return (
      <div className="App">
        <Homepage />
      </div>
    )
  }
}

export default App;
