'use strict';

import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import PageLeft from '../page-left';
import Projects from './projects/project';
import './_exp.scss';

class Exp extends Component {
  render(){
    const settings = {
      showArrows: false,
      showThumbs: true,
      showStatus: false
    };
    return(
      <div className="container-fluid">
        <div className="row ">
          <div className="col col-sm-6 col-md-4 col-lg-3">
            <PageLeft />
          </div>
          <div className="col col-sm-6 col-md-8 col-lg-9">
            <div>
              <h3 className="title">Projects</h3>
              <div className="hr"></div>
              <div className="projects">
                <Carousel {...settings}>
                  <Projects />
                <Carousel />
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Exp;
