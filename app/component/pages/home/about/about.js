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
         <p className="about-text">      I am a Full-Stack Developer from Seattle. My interests are kind of all over the board from Tech related things to Anime. I picked up coding a few years back and with formal training, I've been able to develop a strong skillset. Ultimately, looking to make an impact and provide an incredible User Experience. I love to take on challenges and I am always improving. Check out my links below and connect with me! </p>
        <div className="break"></div>
        <div className="about-icons">
          <a href="./app/component/pages/home/about/assets/dhresume2.pdf" target="_blank" alt="resume"><i className="fa fa-file-text" aria-hidden="true"></i></a>
          <a href="https://www.linkedin.com/in/devon-hackley/"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
          <a href="https://github.com/devonhackley"><i className="fa fa-github-square" aria-hidden="true"></i></a>

        </div>


        </div>
      </div>
    )
  }
}

export default About;
