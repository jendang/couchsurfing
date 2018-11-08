import React, { Component } from 'react';
import {connect} from 'react-redux';
import './styles/SurferButton.css'
import Navbar from './Navbar';
import {getSurfers} from '../actions/actionGetSurfers'


class InformationSurfersContainer extends Component {
  
  renderSurferBtn = () => {
    
    this.props.getSurfers()

  }

  renderSurfer = () => {
    //const {randomSurfers} = this.props
    const {randomSurfers} = this.props
    // if(this.state.displaySurfer) {
      return (
        <div>
          <img className ="no" alt="check" src="images/no.svg" onClick={this.renderSurferBtn}></img>
          <img width="200px" height="200px" src={`./images/${randomSurfers.image}`} alt="profile"/>
          <img className ="yes" alt="check" src="images/yes.svg" onClick={this.renderSurferBtn} />
       

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

    return (
      <div className="renderSurfer">
      <header>
      <Navbar />
      </header>
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




export default connect(mapStateToProps, {getSurfers} )(InformationSurfersContainer);