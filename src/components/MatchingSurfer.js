import React, { Component } from 'react';
import Navbar from './Navbar'
import './styles/matching.css'


class MatchingSurfer extends Component {


    render() { 
    
        return (
          <div><Navbar />
          <div className="main">
          <h1>Congratulation Arien! You found a match with this surfer!!</h1>
  
  
  
              <div class="card">
              
                <div class="flex-container">
                  <div className="kyle"><img width="150px" height="150px" alt="profile" src="images/arien.png"/></div>
                  <div className="mimi"><img width="150px" height="150px" alt="profile" src="images/sabina.jpg"/></div>
                </div>
  
                <p>Sabina</p>
                <button>Contact Surfer</button>
              </div><br></br>
  
  
          </div>
          
          </div>
          
            
    
          );
    }
}


  
  export default (MatchingSurfer);


