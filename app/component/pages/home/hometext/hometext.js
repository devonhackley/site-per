'use strict';

import React, { Component } from 'react';

import './_hometext.scss';

class HomeText extends Component {
  render(){
    return(
      // <p className="text">
      // <span className="text-item"><span className="text-item_inner">Developer.</span></span>
      //
      //
      //
      // <span className="text-item"><span className="text-item_inner">Tech Enthusiast</span></span>
      //
      // <span className="text-item"><span className="text-item_inner">Veteran</span></span>
      //
      // <span className="text-item"><span className="text-item_inner">Tech Enthusiast</span></span>
      //
      // <span className="text-item"><span className="text-item_inner">Anime Lover</span></span>
      //
      // <span className="text-item"><span className="text-item_inner">PNW Native</span></span>
      // </p>

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
