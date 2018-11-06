import React, { Component } from 'react';
import {connect} from 'react-redux';
//import InformationHosts from './InformationHosts'
import { getHosts } from '../actions/actionGetHosts';

class InformationHostsContainer extends Component {
  renderHost = () => {
      return (
        <div>
                {
                     this.props.users.map(user => {
                         return(
                            <ul  key={user.id}>
                                <li>ID: {user.id}</li>
                                <li>Username: {user.username}</li>
                                <li> Lastname: {user.lastname}</li>
                                <li>Age: {user.age}</li>
                                <li>Gender: {user.gender}</li>
                            </ul>

                         )
                     })

                }
            </div>
      )
        

  }


  render() {
   
    return (
      <div className="App">
        <button onClick={this.renderHost}>Render HOST</button>
        {/* <InformationHosts hosts={users} /> */}
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    // hosts = state.getHosts.filter(host => host.status)
      return {
        users: state.users.filter(user => user.isSurfer)
      }
      
      
  


}

export default connect(mapStateToProps)(InformationHostsContainer);