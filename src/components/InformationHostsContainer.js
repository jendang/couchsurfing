import React, { Component } from 'react';
import {connect} from 'react-redux';



class InformationHostsContainer extends Component {
  state = {
    displayHost: false
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


  render() {
   
    return (
      <div className="App">
        <button onClick={this.btnHandle}>Render HOST</button>
        {this.renderHost()}
        <button onClick={this.renderHost}>YES</button>
        <button onClick={this.renderHost}>NO</button>
        
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