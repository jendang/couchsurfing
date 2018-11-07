import React, { Component } from 'react';
import {connect} from 'react-redux';
import './styles/HostButton.css'
import {Link} from 'react-router-dom';





class InformationHostsContainer extends Component {
  state = {
    displayHost: false,
    code: true
  }

  renderHost = () => {
    const {randomHosts} = this.props
    if(this.state.displayHost) {
      return (
        <div>
          
          <p>Name: {randomHosts.username}</p>
          <p>Age: {randomHosts.age}</p>
          <p>Gender: {randomHosts.gender}</p>

         
        </div>
        
      )

    }else
      return null

  }

  btnHandle = () => {
    this.setState({displayHost: !this.state.displayHost})
  }

  clickHandle = () => {

  }

  render() {
   
    return (
      <div className="renderHost">
        <Link to= {'/hosts'}><button className = "HostButton" onClick={this.btnHandle}>Hosts</button></Link>
        {this.renderHost()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // hosts: state.users.filter(user => !user.isSurfer)
    randomHosts: state.reducerRandomHost
  }
 
}

export default connect(mapStateToProps)(InformationHostsContainer);