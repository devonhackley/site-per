'use strict';

import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import PageHeader from '../pageheader/pageheader';
import Projects from './projects/project';
import './_exp.scss';

class Exp extends Component {
  render(){
    const settings = {
      showArrows: true,
      showThumbs: true,
      showStatus: false
    };
    return(
      <div className="exp container-fluid">
        <div className="row">
          <div className="col">
             <PageHeader />
          </div>
        </div>
      </div>
    )
  }
}


export default Exp;
