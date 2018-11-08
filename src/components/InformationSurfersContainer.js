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
          {/* <img width="200px" height="200px" src={`./images/${randomSurfers.image}`} alt="profile"/> */}
          <div className="flex-container">
          <div><img className ="no" alt="check" src="images/no.svg" onClick={this.renderSurferBtn}></img></div>
          <div><img className="profile" width="200px" height="200px" src={`./images/${randomSurfers.image}`} alt="profile"/></div>
          <div><img className ="yes" alt="check" src="images/yes.svg" onClick={this.renderSurferBtn} /></div>
          </div>

          <div className="info">
          <p>Name: {randomSurfers.username}</p>
          <p>Age: {randomSurfers.age}</p>
          <p>Gender: {randomSurfers.gender}</p>
          </div>
          
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
<<<<<<< HEAD
      <div>
        <header>
            <Navbar /> 

        </header>
        <div className="renderSurfer">
          {this.renderSurfer()}
        </div>

=======
      <div className="renderSurfer">
      <header>
      <Navbar />
      </header>
        {this.renderSurfer()}
>>>>>>> e32f39c0e9da367927d157de3c848becf64acd04
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