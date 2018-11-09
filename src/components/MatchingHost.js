import React, { Component } from 'react';
import Navbar from './Navbar'
import './styles/matching.css'


class MatchingHost extends Component {


    render() { 
    
        return (
        <div><Navbar />
        <div className="main">
        <h1>Congratulation Kyle! You found a match with this host!!</h1>
          <div className="flex-container">


            <div class="card">
            
              <div class="container">
              <img width="150px" height="150ppx" alt="profile" src="images/kyle.jpg"/><br></br><br></br>    
              <img width="150ppx" height="150ppx" alt="profile" src="images/mimi.png"/><br></br><br></br>
              </div>
              <p>Mimi</p>
              <button>Contact Host</button>
            </div><br></br>

          </div>

        </div>
        
        </div>
        


          );
    }
}


  
  export default (MatchingHost);


