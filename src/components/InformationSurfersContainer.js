import React, { Component } from 'react';
import {connect} from 'react-redux';
import './styles/SurferButton.css'
import {Link} from 'react-router-dom';

class InformationSurfersContainer extends Component {
  
  // state = {
  //   displaySurfer: false
  // }

  renderSurfer = () => {
    const {randomSurfers} = this.props
    // if(this.state.displaySurfer) {
      return (
        <div>
          <p>Name: {randomSurfers.username}</p>
          <p>Age: {randomSurfers.age}</p>
          <p>Gender: {randomSurfers.gender}</p>

        </div>
        
      )

    // }else
    //   return null
  }
    

  // btnHandle = () => {
  //   this.setState({displaySurfer: !this.state.displaySurfer})
  // }


  render() {
   console.log(this.props)
    return (
      <div className="renderSurfer">
        {this.renderSurfer()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    randomSurfers: state.reducerRandomSurfer
  }
 
}




export default connect(mapStateToProps)(InformationSurfersContainer);