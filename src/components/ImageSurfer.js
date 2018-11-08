import React, { Component } from 'react';
import YesSurfer from './YesSurfer'
import NoSurfer from './NoSurfer'
import './styles/image.css';


class ImageSurfer extends Component {
  render() {
    return (
      <div className="flex-container">

        <div><div className="button"><NoSurfer /></div></div>

        <div><img width="250px" alt="profilepic" src="images/KYLE.jpg"></img></div>

        <div><div className="button"><YesSurfer /></div></div>

      </div>
    );
  }
}

export default ImageSurfer;