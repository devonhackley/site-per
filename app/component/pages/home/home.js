'use strict';
import React, { Component } from 'react';

import PageLeft from '../page-left';
import HomeText from './hometext/hometext';
import "./_home.scss";

class Home extends Component {
  render(){
    return (
      <div className="container-fluid">
        <div className="row ">
          <div className="col col-sm-6 col-md-4 col-lg-3">
            <PageLeft />
          </div>
          <div className="col col-sm-6 col-md-8 col-lg-9">
            <div className="right">
              <div className="home-heading">
                <h2 className="home-text"> Hi, my name is Devon</h2>
                <h2 className="home-text"> and</h2>
                <h2 className="home-text"> I am a <HomeText /></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
