'use strict';

import React, { Component } from 'react';
import PageLeft from '../page-left';

import './_exp.scss';

class Exp extends Component {
  render(){
    return(
      <div className="container-fluid">
        <div className="row ">
          <div className="col col-sm-6 col-md-4 col-lg-3">
            <PageLeft />
          </div>
          <div className="col col-sm-6 col-md-8 col-lg-9">
            <div>
              <h3 className="title">Projects</h3>
              <div className="hr"></div>
              <div className="projects">
                <div className="pca-hold">
                  <div className='pca-main'>
                    <div className='pca-inner'>
                        <p> Hi</p>
                    </div>
                  </div>
                  <div className='pca-sub'>
                    <div className='pca-top'></div>
                    <div className='pca-mid'>
                      <div className='pca-part'></div>
                    </div>
                    <div className='pca-bot'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Exp;
