import React, { Component } from 'react';
import './styles/InitialButton.css'
import InformationHostsContainer from './InformationHostsContainer';
import {Link} from 'react-router-dom';
import InformationSurfersContainer from './InformationSurfersContainer';


class InitialButton extends Component {
    state = {  }
    renderHostBtn = () => {
        return <InformationHostsContainer />
        
    }

    renderSurferBtn = () => {
        return <InformationSurfersContainer />
    }

    render() { 
        return (  
            <div>
                <h1>Welcome </h1>
                <p className = "UpperText"> I am looking for a: </p>
                <Link to= {'/surfers'}><button className ="InitialButton" onClick={this.renderSurferBtn}>Surfer</button></Link>

                <Link to= {'/hosts'}><button className ="InitialButton" onClick={this.renderHostBtn}>Host</button></Link>
                
            </div>
        );
    }
}


 
export default InitialButton;