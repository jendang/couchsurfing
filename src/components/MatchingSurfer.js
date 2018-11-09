import React, { Component } from 'react';
import Navbar from './Navbar'


class MatchingSurfer extends Component {


    render() { 
    
        return (
            <div>
                <header>
                    <Navbar /> 
                </header>
                <h1>Congratulation! You found a match with this surfer!!</h1>
                <div>
                    <h1>Arien</h1>
                     <img width="100px" height="100px" alt="profile" src="images/arien.png"/>
                </div>
                <div>
                    <h1>Sabina</h1>
                    <img width="100px" height="100px" alt="profile" src="images/sabina.jpg"/>
                </div>
                <button>Contact Host</button>
                <button>Still want to look for another host?</button>
            </div>
            


          );
    }
}


  
  export default (MatchingSurfer);


