'use strict';

import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import ExpHeader from './expheader/expheader';
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
      <div className="exp">
        <ExpHeader />
      </div>
    )
  }
}


export default Exp;
