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
<<<<<<< HEAD
                <p className = "UpperText"> What are you today? </p>
                
                <Link to= {'/hosts'}><button className ="InitialButton1" onClick={this.renderHostBtn}>Surfer</button></Link>

                <li><img className="surfer"alt="surferborder" src="images/Surfboard_border.svg"></img></li>
                

                    <Link to= {'/surfers'}><button className ="InitialButton2" onClick={this.renderSurferBtn}>Host</button></Link>
                    <li><img className="sofa"alt="sofaborder" src="images/Sofa_border.svg"></img></li>

=======
                <p className = "Header"> Welcome to your dashboard! </p>
                <p className = "UpperText"> What are you looking for? </p>
                <Link to= {'/surfers'}><button className ="InitialButton1" onClick={this.renderSurferBtn}>A Surfer</button></Link>
                <Link to= {'/hosts'}><button className ="InitialButton2" onClick={this.renderHostBtn}>A Host</button></Link>
>>>>>>> c7c23cf8e6c44e9dd172f71bf2f4fe422df2d867
                
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

