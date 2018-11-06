import React, { Component } from 'react';
import {connect} from 'react-redux';
import InformationHosts from './InformationHosts'
import { getHosts } from '../actions/actionGetHosts';

class InformationHostsContainer extends Component {
  renderHost = (user) => {
      
        return this.props.dispatch(getHosts(user))

  }


  render() {
   
    const users = this.props.users
    if(!users) return null
    return (
      <div className="App">
        {/* <button onClick={this.renderHost}>Render HOST</button> */}
        <InformationHosts hosts={users} />
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    // hosts = state.getHosts.filter(host => host.status)
      return {
        users: state.users.filter(user => !user.isSurfer)
      }
      
      
  


}

export default connect(mapStateToProps)(InformationHostsContainer);