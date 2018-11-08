import React, { Component } from 'react';
import Yes from './Yes'
import No from './No'
import './styles/image.css';


class Image extends Component {
  render() {
    return (
      <div className="flex-container">

        <div><div className="button"><No /></div></div>

        <div><img width="250px" alt="profilepic" src="images/768px-Halbe_Zijlstra_2012.jpg"></img></div>

        <div><div className="button"><Yes /></div></div>

      </div>
    );
  }
}

export default Image;