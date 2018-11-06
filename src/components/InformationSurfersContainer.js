import React, { Component } from 'react';
import {connect} from 'react-redux';
import InformationSurfers from './InformationHosts'

class InformationSurfersContainer extends Component {
  renderHost = (user) => {
    
      this.props.dispatch({
        type: 'GET_SURFERS',
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
    const surfers = this.props.surfers
    if(!surfers) return null
    return (
      <div className="App">
        {/* <button onClick={this.renderHost}>Surfer</button> */}
        {/* <button onClick={this.renderSurfer}>Host</button> */}
        <InformationSurfers surfers={surfers}/>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    surfers: state.filter(surfer => surfer.status)
  }
}

export default connect(mapStateToProps)(InformationSurfersContainer);