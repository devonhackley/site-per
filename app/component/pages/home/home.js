'use strict';
import React, { Component } from 'react';

import "./_home.scss";

class Home extends Component {
  render(){
    return (
      <div className="container-fluid">
        <div className="row ">
          <div className="col col-sm-6 col-md-4  left">
            <div className="pic"><img  className="img-responsive" src="http://ultimatemedia.hu/img/avatar4.png" />
            </div>

          </div>
          <div className="col col-sm-6 col-md-8 right">
             <p>Bye</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
