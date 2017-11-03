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
         <p className="about-text">      I am a Full-Stack Developer from Seattle. I started coding a few years back and have loved it ever since. My interests are kind of all over the board from Tech related things to Anime. Ultimately, looking to make an impact and provide an incredible user experience. I love to take challenges and I am always improving. Check out some of my links below and connect with me! </p>

        </div>
      </div>
    )
  }
}

export default About;
