import React, { Component } from 'react';
import {connect} from 'react-redux';
import './styles/HostButton.css'






class InformationHostsContainer extends Component {
  state = {}

  renderHost = () => {
    const {randomHosts} = this.props

      return (
        <div>
          <img width="200px" height="200px" src={`./images/${randomHosts.image}`} alt="profile"/>
          <p>Name: {randomHosts.username}</p>
          <p>Age: {randomHosts.age}</p>
          <p>Gender: {randomHosts.gender}</p>

         
        </div>
        
      )

  

  }

 

  render() {
   
    return (
      <div className="renderHost">
        {this.renderHost()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
   
    randomHosts: state.reducerRandomHost

  }
 
}

export default connect(mapStateToProps)(InformationHostsContainer);