import React, { Component } from 'react';
import {connect} from 'react-redux';
import InformationHosts from './InformationHosts'

class InformationHostsContainer extends Component {
  renderHost = (user) => {
    
      this.props.dispatch({
        type: 'GET_HOST',
        payload: {
          id: user.id,
          username: user.username,
          lastname: user.lastname,
          age: user.age,
          gender: user.gender
        }
      })

    

  }
  // renderSurfer = (user) => {
  //   if(user.status){
  //     this.props.dispatch({
  //       type: 'GET_SURFER',
  //       payload: {
  //         id: user.id,
  //         username: user.username,
  //         lastname: user.lastname,
  //         age: user.age,
  //         gender: user.gender
  //       }
  //     })

  //   }

  // }

  render() {
    const hosts = this.props.hosts
    if(!hosts) return null
    return (
      <div className="App">
        {/* <button onClick={this.renderHost}>Surfer</button> */}
        {/* <button onClick={this.renderSurfer}>Host</button> */}
        <InformationHosts hosts={hosts}/>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hosts: state.filter(host => !host.status)
  }
}

export default connect(mapStateToProps)(InformationHostsContainer);