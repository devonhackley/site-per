'use strict';

import React, { Component } from 'react';
import PageLeft from '../page-left';

class Contact extends Component {
  render(){
    return(
      <div className="container-fluid">
        <div className="row ">
          <div className="col col-sm-6 col-md-4 col-lg-3">
            <PageLeft />
          </div>
          <div className="col col-sm-6 col-md-8 col-lg-9">
            <div className="right">
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Contact;
