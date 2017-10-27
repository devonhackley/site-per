'use strict';
import React, { Component } from 'react';

import Nav from './nav/nav';
import "./_home.scss";

class Home extends Component {
  render(){
    return (
      <div className="container-fluid">
        <div className="row ">
          <div className="col col-sm-6 col-md-4  left">
            <div className="pic"><img  className="img-responsive" src="http://ultimatemedia.hu/img/avatar4.png" />
            </div>
            <Nav />
          </div>
          <div className="col col-sm-6 col-md-8 right">
            <div className="home-heading">
             <h2 className="home-text"> Hi, my name is Devon</h2>
             <h2 className="home-text"> and</h2>
             <h2 className="home-text"> I am a <span>###</span></h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
