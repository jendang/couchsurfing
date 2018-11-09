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
        <div>
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

        <div>
        <Link to= {'/matching-surfer'}>
          <img width="100px" height="100px" className="yes" alt="check" src="images/big-heart.svg" onClick={this.interestedBtn} />
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