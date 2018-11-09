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
    
    const {randomSurfers} = this.props
   
      return (
        <div className="main">

          <div className="flex-container">

            <div><img className ="no" alt="check" src="images/previous.svg" onClick={this.renderSurferBtn}></img></div>

            <div class="card">
              <img width="100%" src={`./images/${randomSurfers.image}`} alt="Avatar"></img>
              <div class="container">
                <p>
                Name: {randomSurfers.username}<br></br><br></br>
                Age: {randomSurfers.age}<br></br><br></br>
                Gender: {randomSurfers.gender}
                </p>
              </div>
            </div>

            <div><img className ="yes" alt="check" src="images/next.svg" onClick={this.renderSurferBtn}></img></div>
          
          </div>
          
        </div>
        
      )

   
  }


  render() {

    return (
      <div>
        <header>
          <Navbar />
        </header>
        <div className="renderSurfer">
          {this.renderSurfer()}
        </div>
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