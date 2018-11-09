import React, { Component } from 'react';
import Navbar from './Navbar'
import './styles/matching.css'


class MatchingHost extends Component {


    render() { 
    
        return (
        <div><Navbar />
        <div className="main">
        <h1>Congratulation Kyle! You found a match with this host!!</h1>



            <div class="card">
            
              <div class="flex-container">
                <div className="kyle"><img width="150px" height="150px" alt="profile" src="images/sofa1.jpeg"/></div>
                <div className="mimi"><img width="150px" height="150px" alt="profile" src="images/mimi.png"/></div>
              </div>

              <p>Mimi</p>
              <button>Contact Host</button>
            </div><br></br>


        </div>
        
        </div>
        


          );
    }
}


  
  export default (MatchingHost);


