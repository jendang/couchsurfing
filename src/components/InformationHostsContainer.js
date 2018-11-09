import React, { Component } from 'react';
import {connect} from 'react-redux';
import './styles/HostButton.css'
import Navbar from './Navbar'
import {getHosts} from '../actions/actionGetHosts'
import {Link} from 'react-router-dom';
import MatchingHost from './MatchingHost';

class InformationHostsContainer extends Component {
  
  renderHostBtn = () => {
    this.props.getHosts()

  }

  interestedBtn = () => {
    const {randomHosts} = this.props
    if(randomHosts.username === 'MiMi' || randomHosts.username === 'Arien')
      return <MatchingHost />
    else
      return null
  }

  renderHost = () => {
    const {randomHosts} = this.props
      return (
        <div className="main">

          <div className="flex-container">

            <div><img className="arrow" alt="check" src="images/arrow back.svg" onClick={this.renderHostBtn}></img></div>

            <div class="card">
              <img width="100%" src={`./images/${randomHosts.image}`} alt="Avatar"></img>
              <div class="container">
                <p>
                Name: {randomHosts.username}<br></br><br></br>
                Age: {randomHosts.age}<br></br><br></br>
                Gender: {randomHosts.gender}
                </p>
              </div>
            </div>

            <div className="arrowcircle">
              <img className="arrow" alt="check" src="images/Arrow.svg" onClick={this.renderHostBtn}></img>
            </div>
          
          </div>
          
          <div>
            <Link to= {'/matching-host'}>
              <img width="70px" height="70px" className="yes" alt="check" src="images/Heart.svg" onClick={this.interestedBtn} />
            </Link>
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