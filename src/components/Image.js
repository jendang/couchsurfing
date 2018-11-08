import React, { Component } from 'react';
import Yes from './YesSurfer'
import No from './NoSurfer'
import './styles/image.css';


class Image extends Component {
  render() {
    return (
      <div className="flex-container">

        <div><div className="button"><No /></div></div>

        <div><img width="250px" alt="profilepic" src="images/KYLE.jpg"></img></div>

        <div><div className="button"><Yes /></div></div>

      </div>
    );
  }
}

export default Image;