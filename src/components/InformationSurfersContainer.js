import React, { Component } from 'react';
import {connect} from 'react-redux';
import './styles/SurferButton.css'
import Navbar from './Navbar';
import {getSurfers} from '../actions/actionGetSurfers'
import MatchingSurfer from './MatchingSurfer';
import {Link} from 'react-router-dom';

class InformationSurfersContainer extends Component {
  
  renderSurferBtn = () => {
    this.props.getSurfers()
  }

  interestedBtn = () => {
    const {randomSurfers} = this.props
    if(randomSurfers.username === 'Kyle' || randomSurfers.username === 'Sabina')
      return <MatchingSurfer />
    else
      return null
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

          <div>
            <Link to= {'/matching-surfer'}>
              <img width="70px" height="70px" className="yes" alt="check" src="images/big-heart.svg" onClick={this.interestedBtn} />
            </Link>
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