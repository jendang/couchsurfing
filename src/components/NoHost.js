import React, { Component } from 'react';
import {getHosts} from '../actions/actionGetHosts'
import {connect} from 'react-redux'
import './styles/text.css'


class NoHost extends Component {
  
  renderNoHostBtn = () => {
    
    this.props.getHosts()

  }
   
  render() {
    return (
      <div className="App">
        <img className ="no" alt="check" src="images/no.svg" onClick={this.renderNoHostBtn}></img>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hosts: state.reducerRandomHost
  }
}


export default connect(mapStateToProps,{getHosts})(NoHost);