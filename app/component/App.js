'use strict';

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './pages/home/home.js';
import ExpPage from './pages/exp/exp.js';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/home" component={Homepage}/>
            <Route exact path="/exp" component={ExpPage}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
