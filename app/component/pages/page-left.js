'use strict';
import React, { Component } from 'react';

import Nav from './nav/nav';
import './home/_home.scss';

class PageLeft extends Component {
  render(){
    return(
      <div className="left">
        <div className="pic"><img  className="img-responsive"   src="http://i64.tinypic.com/2q2ltmh.png" />
        </div>
        <Nav />
      </div>
    )
  }
}

export default PageLeft;
