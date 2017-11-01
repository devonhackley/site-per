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
            <div>
              <div className="home-heading">
                <h2> Hi, my name is <span>Devon</span></h2>
                <h2> and</h2>
                <h2> I am a <HomeText /></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
