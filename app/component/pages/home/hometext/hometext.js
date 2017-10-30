'use strict';

import React, { Component } from 'react';

import './_hometext.scss';

class HomeText extends Component {
  render(){
    return(
      <div className="text">
          <ul className="text-container-list">
            <li className="text-container-list-item">Developer</li>
            <li className="text-container-list-item">Veteran</li>
            <li className="text-container-list-item">Tech Enthusiast</li>

            <li className="text-container-list-item">PNW Native</li>
          </ul>

      </div>
    )
  }
}

export default HomeText;
