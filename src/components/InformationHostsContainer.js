import React, { Component } from 'react';
import {connect} from 'react-redux';
import './styles/HostButton.css'
import Navbar from './Navbar'
import {getHosts} from '../actions/actionGetHosts'

class InformationHostsContainer extends Component {
  state = {}


  renderHostBtn = () => {
   
      this.props.getHosts()

  }

  interestedBtn = () => {
    const {randomHosts} = this.props
    if(randomHosts.username === 'MiMi' || randomHosts.username === 'Arien')
      return alert("Congrat!!")
    else
      return null
  }

  renderHost = () => {
    const {randomHosts} = this.props
    
      return (
        <div>
          <div className="flex-container">
            <div><img className="no" alt="check" src="images/previous.svg" onClick={this.renderHostBtn} /></div>
            <div><img className="profile" height="200px" src={`./images/${randomHosts.image}`} alt="profile"/></div>
            <div><img className="yes" alt="check" src="images/Next.svg" onClick={this.renderHostBtn} /></div>
          </div>
          <div className="info">
            <p>Name: {randomHosts.username}</p>
            <p>Age: {randomHosts.age}</p>
            <p>Gender: {randomHosts.gender}</p>
          </div>

          <div>
            <img width="100px" height="100px" className="yes" alt="check" src="images/big-heart.svg" onClick={this.interestedBtn} />
            
          </div>
         
        </div>
        
      )

  

  }

 

  render() {
   
    return (
      <div> 
          <header>
              <Navbar /> 
           </header>
          <div className="renderHost">
            {this.renderHost()}
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
   
    randomHosts: state.reducerRandomHost

  }
 
}

export default connect(mapStateToProps, {getHosts})(InformationHostsContainer);