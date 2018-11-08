import React, { Component } from 'react';
import {getSurfers} from '../actions/actionGetSurfers'
import {connect} from 'react-redux'

class NoSurfer extends Component {
  renderNoBtn = () => {
    
    this.props.getSurfers()

  }

  render() {
    return (
      <div className="App">
        <img className ="no" alt="check" src="images/no.svg" onClick={this.renderNoBtn}></img>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    surfers: state.reducerRandomSurfer
  }
}


export default connect(mapStateToProps,{getSurfers})(NoSurfer);