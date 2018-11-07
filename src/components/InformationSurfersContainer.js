import React, { Component } from 'react';
import {connect} from 'react-redux';


class InformationSurfersContainer extends Component {
  
  state = {
    displaySurfer: false
  }

  renderSurfer = () => {
    const {randomSurfers} = this.props
    if(this.state.displaySurfer) {
      return (
        <div>
          <p>Name: {randomSurfers.username}</p>
          <p>Age: {randomSurfers.age}</p>
          <p>Gender: {randomSurfers.gender}</p>

        </div>
        
      )

    }else
      return null
  }
    

  btnHandle = () => {
    this.setState({displaySurfer: !this.state.displaySurfer})
  }


  render() {
   
    return (
      <div className="App">
        <button onClick={this.btnHandle}>Render SURFERS</button>
        {this.renderSurfer()}
        <button onClick={this.renderSurfer}>YES</button>
        <button onClick={this.renderSurfer}>NO</button>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    randomSurfers: state.reducerRandomSurfer
  }
 
}




export default connect(mapStateToProps)(InformationSurfersContainer);