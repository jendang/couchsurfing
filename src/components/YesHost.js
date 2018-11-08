import React, { Component } from 'react';
import {getHosts} from '../actions/actionGetHosts'
import {connect} from 'react-redux'

class YesHost extends Component {
  renderYesHostBtn = () => {
    
    this.props.getHosts()

  }


  render() {
    return (
      <div className="App" >  
        <img className ="yes" alt="check" src="images/yes.svg" onClick={this.renderYesHostBtn} />
       
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hosts: state.reducerRandomHost
  }
}


export default connect(mapStateToProps,{getHosts})(YesHost);