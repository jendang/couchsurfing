import React, { Component } from 'react';
import {connect} from 'react-redux';
import Navbar from './Navbar'


class MatchingHost extends Component {


    render() { 
    
        return (
            <div>
                <header>
              <Navbar /> 
           </header>
                <h1>Congratulation Kyle! You found a match with this host!!</h1>
                <div>
                     <img width="100px" height="100px" alt="profile" src="images/kyle.jpg"/>
                </div>
                <div>
                    <img width="100px" height="100px" alt="profile" src="images/mimi.png"/>
                    <h1>Mimi</h1>
                </div>
                <button>Contact Host</button>
                <button>Still want to look for another host?</button>
            </div>
            


          );
    }
}

const mapStateToProps = (state) => {
    return {
     
      randomHosts: state.reducerRandomHost,
      randomSurfers: state.reducerRandomSurfer

  
    }
   
  }
  
  export default connect(mapStateToProps)(MatchingHost);


