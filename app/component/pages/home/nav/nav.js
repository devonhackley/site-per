'use strict';

import React, { Component } from 'react';

import './_nav.scss';


class Nav extends Component {
  render(){
    return (
      <ul className="site-nav">
        <li className="nav-link active"><a href="#">HOME</a></li>
        <li className="nav-link"><a href="#">EXP</a></li>
        <li className="nav-link"><a href="#">CONTACT</a></li>
      </ul>
    )
  }
}


export default Nav;
