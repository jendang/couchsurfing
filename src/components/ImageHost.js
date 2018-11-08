import React, { Component } from 'react';
import YesHost from './YesHost'
import NoHost from './NoHost'
import './styles/image.css';


class ImageSurfer extends Component {
  render() {
    return (
      <div className="flex-container">

        <div><div className="button"><NoHost /></div></div>

        {/* <div>
          <img width="250px" alt="profilepic" src="images/KYLE.jpg"></img>
          
        </div> */}

        <div><div className="button"><YesHost /></div></div>
        

      </div>
    );
  }
}

export default ImageSurfer;