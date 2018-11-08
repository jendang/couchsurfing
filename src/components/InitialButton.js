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
                <p className = "Header"> Welcome _______ </p>
                <p className = "UpperText"> What are you looking for, today? </p>
                <Link to= {'/surfers'}><button className ="InitialButton1" onClick={this.renderSurferBtn}>A Surfer</button></Link>

                <Link to= {'/hosts'}><button className ="InitialButton2" onClick={this.renderHostBtn}>A Host</button></Link>
                
            </div>
                
        );
    }
}


 
export default InitialButton;