import React, { Component } from 'react';
import {connect} from 'react-redux';

class Matching extends Component {
    state = { 
         
    }
    render() { 
        return (  );
    }
}

const mapStateToProps = (state) => {
    return {
     
      randomHosts: state.reducerRandomHost,
      randomSurfers: state.reducerRandomSurfer

  
    }
   
  }
  
  export default connect(mapStateToProps)(InformationHostsContainer);


export default Matching;