'use strict';

import React, { Component } from 'react';

import './_pageheader.scss';
import '../nav/_nav.scss';
import '../home/header/_header.scss';

class PageHeader extends Component {
  render(){
    return(
      <div className="pageheader">
        <ul>
        <li className="nav-link active cmn-t-underline"><a href="/home">HOME</a></li>
        <li className="nav-link cmn-t-underline "><a href="/exp">EXP</a></li>
        <li className="nav-link cmn-t-underline"><a href="/contact">CONTACT</a></li>
        </ul>
        <h2 className="shadow">Devon Hackley</h2>
        <h2 className="shadow">Full-Stack Developer</h2>

      </div>
    )
  }
}

export default PageHeader;
