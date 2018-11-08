import React, { Component } from 'react';
import {connect} from 'react-redux';
import './styles/HostButton.css'
import Navbar from './Navbar'
import {getHosts} from '../actions/actionGetHosts'






class InformationHostsContainer extends Component {
  state = {}


  renderHostBtn = () => {
    
    this.props.getHosts()

  }

  renderHost = () => {
    const {randomHosts} = this.props
    // this.props.getHosts()

      return (
        <div>
          <img className ="no" alt="check" src="images/no.svg" onClick={this.renderHostBtn}></img>
          <img width="200px" height="200px" src={`./images/${randomHosts.image}`} alt="profile"/>
          <img className ="yes" alt="check" src="images/yes.svg" onClick={this.renderHostBtn} />
          <p>Name: {randomHosts.username}</p>
          <p>Age: {randomHosts.age}</p>
          <p>Gender: {randomHosts.gender}</p>

         
        </div>
        
      )

  

  }

 

  render() {
   
    return (
      <div> 
        <header>
          <Navbar /> 

        </header>
          <div className="renderHost">
          {this.renderHost()}
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
   
    randomHosts: state.reducerRandomHost

  }
 
}

export default connect(mapStateToProps, {getHosts})(InformationHostsContainer);