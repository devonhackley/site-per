'use strict';

import React, { Component } from 'react';
import './_about.scss';

class About extends Component {
  render(){
    return(
      <div className="about parallax">
        <div className="about-box">
         <p className="about-head">Hi, Thanks for Stopping By!</p>
         <div className="break"></div>
         <p className="about-text">      I am a Full-Stack Developer from Seattle. I started coding a few years back and have loved it ever since. My interests are kind of all over the board from Tech related things to Anime. Ultimately, looking to make an impact and provide an incredible User Experience. I love to take challenges and I am always improving. Check out some of my links below and connect with me! </p>
        <div className="about-icons">
          <a href="assets/dhresume2.pdf" target="_blank"><i className="fa fa-file-text" aria-hidden="true"></i></a>
          <a href="https://www.linkedin.com/in/devon-hackley/"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
          <a href="https://github.com/devonhackley"><i className="fa fa-github-square" aria-hidden="true"></i></a>

        </div>


        </div>
      </div>
    )
  }
}

export default About;
