import React, { Component } from 'react';
import Navbar from './Navbar'
import './styles/matching.css'


class MatchingSurfer extends Component {


    render() { 
    
        return (
            <div><Navbar />
            <div className="main">
            <h1>Congratulation Arien! You found a match with this host!!</h1>
              <div className="flex-container">
    
    
                <div class="card">
                
                  <div class="container">
                  <img width="150px" height="150ppx" alt="profile" src="images/arien.png"/><br></br><br></br>    
                  <img width="150ppx" height="150ppx" alt="profile" src="images/sabina.jpg"/><br></br><br></br>
                  </div>
                  <p>Sabina</p>
                  <button>Contact Host</button>
                </div><br></br>
    
              </div>
    
            </div>
            
            </div>
            
    
          );
    }
}


  
  export default (MatchingSurfer);


