'use strict';
import React, { Component } from 'react';

import Header from './header/header';
import HomeText from './hometext/hometext';
import About from './about/about';
import Nav from '../nav/nav';
import "./_home.scss";

class Home extends Component {
  render(){
    return (
      <div className="home container-fluid">
        <div className="row">
          <div className="col">
             <Nav />
             <Header />
             <About />
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
