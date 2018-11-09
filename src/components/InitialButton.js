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
        // return <InformationHostsContainer />
        this.props.getHosts()
        
    }

    renderSurferBtn = () => {
        // return <InformationSurfersContainer />
        this.props.getSurfers()
    }

    render() { 
        return (  
            <div>
                <Navbar />
                <p className = "UpperText"> What are you today? </p>
                
                <Link to= {'/hosts'}><button className ="InitialButton1" onClick={this.renderHostBtn}>Surfer</button></Link>

                <li><img className="surfer"alt="surferborder" src="images/Surfboard_border.svg"></img></li>
                

                    <Link to= {'/surfers'}><button className ="InitialButton2" onClick={this.renderSurferBtn}>Host</button></Link>
                    <li><img className="sofa"alt="sofaborder" src="images/Sofa_border.svg"></img></li>

                
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


 
//export default InitialButton;
