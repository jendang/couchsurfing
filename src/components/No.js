import React, { Component } from 'react';
import InformationSurfersContainer from './InformationSurfersContainer';

class No extends Component {
  
  handleRandom = () => {
    return <InformationSurfersContainer />
  }
   
  render() {
    return (
      <div className="App">
        <img className ="no" alt="check" src="images/no.svg" onClick={this.handleRandom}></img>
      </div>
    );
  }
}

export default No;