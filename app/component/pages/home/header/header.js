'use strict';

import React, { Component } from 'react';
import TextCarousl from 'react-text-carousel';

import './_header.scss';
class Header extends Component {
  render(){
    return (
      <div className="header">
        <div className="pic">
          <img  className="img-responsive"   src="http://i64.tinypic.com/2q2ltmh.png" />
        </div>
        <h2 className="shadow">Devon Hackley</h2>
        <h2 className="shadow">Full-Stack Developer</h2>
      </div>
   )
  }
}


export default Header;
