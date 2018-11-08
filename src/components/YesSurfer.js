import React, { Component } from 'react';

import {getSurfers} from '../actions/actionGetSurfers'
import {connect} from 'react-redux'

class Yes extends Component {
  renderYesBtn = () => {
    
    this.props.getSurfers()

  }


  render() {
    return (
      <div className="App" >  
        <img className ="yes" alt="check" src="images/yes.svg" onClick={this.renderYesBtn} />
       
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    surfers: state.reducerRandomSurfer
  }
}


export default connect(mapStateToProps,{getSurfers})(Yes);