'use strict';
import React, { Component } from 'react';

import Header from './header/header';
import HomeText from './hometext/hometext';
import Nav from '../nav/nav';
import "./_home.scss";

class Home extends Component {
  render(){
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
             <Nav />
             <Header />
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
