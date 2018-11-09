import React, { Component } from 'react';
import Navbar from './Navbar'
import './styles/matching.css'


class MatchingSurfer extends Component {


    render() { 
    
        return (
          <div><Navbar />
          <div className="main">
          <div className="message">
          <h2>Congratulation Arien! </h2>
           <h2> You have been matched with this surfer.</h2>
          </div>
  
  
  
              <div class="card">
              
                <div class="flex-container">
                  <div className="kyle"><img width="150px" height="150px" alt="profile" src="images/arien.png"/></div>
                  <div className="mimi"><img width="150px" height="150px" alt="profile" src="images/sabina.jpg"/></div>
                </div>
  
                <p>Sabina</p>
                <button className="contact">Contact Surfer</button>
              </div><br></br>
  
  
          </div>
          
          </div>
          
            
    
          );
    }
}


  
  export default (MatchingSurfer);


