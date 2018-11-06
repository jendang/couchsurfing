import React, { Component } from 'react';
import {connect} from 'react-redux';
import InformationHosts from './InformationHosts'

class InformationHostsContainer extends Component {
  renderHost = (user) => {
    
      this.props.dispatch({
        type: 'GET_HOSTS',
        payload: {
          id: user.id,
          username: user.username,
          lastname: user.lastname,
          age: user.age,
          gender: user.gender
        }
      })

  }


  render() {
    // const hosts = this.props.hosts
    const users = this.props.users
    if(!users) return null
    return (
      <div className="App">
        <InformationHosts users={users}/>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  if(state.reducer !== null){
    return {
      users: state.filter(user => )
       
    }

  }
  return {}
}

export default connect(mapStateToProps)(InformationHostsContainer);