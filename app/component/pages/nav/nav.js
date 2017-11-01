'use strict';

import React, { Component } from 'react';

import './_nav.scss';


class Nav extends Component {
  render(){
    return (
      <ul className="site-nav">
        <li className="nav-link active"><a href="/home">HOME</a></li>
        <li className="nav-link"><a href="/exp">EXP</a></li>
        <li className="nav-link"><a href="/contact">CONTACT</a></li>
      </ul>
    )
  }
}


export default Nav;
