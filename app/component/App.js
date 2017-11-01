'use strict';

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home/home.js';
import ExpPage from './pages/exp/exp.js';
import ContactPage from './pages/contact/contact.js';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/home" component={HomePage}/>
            <Route exact path="/exp" component={ExpPage}/>
            <Route exact path="/contact" component={ContactPage}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
