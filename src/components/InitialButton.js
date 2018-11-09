import React, { Component } from 'react';
import './styles/InitialButton.css'
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import {getHosts} from '../actions/actionGetHosts'
import {connect} from 'react-redux';
import {getSurfers} from '../actions/actionGetSurfers'

class InitialButton extends Component {
    state = {  }
    renderHostBtn = () => {
        this.props.getHosts()
        
    }

    renderSurferBtn = () => {
        this.props.getSurfers()
    }

    render() { 
        return (  
            <div>
                <Navbar />
                <p className = "UpperText"> What are you today? </p>

                <div className="container-flexbox">
                    <div className="surfer">
                        <Link to= {'/hosts'}><button className ="InitialButton1" onClick={this.renderHostBtn}>Surfer</button></Link>

                        {/* <img className="surferImg"alt="surferborder" src="images/Surfboard_border.svg"></img> */}

                    </div>
                
                <div className="host">
                    <Link to= {'/surfers'}><button className ="InitialButton2" onClick={this.renderSurferBtn}>Host</button></Link>
                    {/* <img className="sofaImg"alt="sofaborder" src="images/Sofa_border.svg"></img> */}
                </div>

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
  
  export default connect(mapStateToProps, {getHosts,getSurfers})(InitialButton);

