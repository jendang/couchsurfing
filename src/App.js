import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import InformationHostsContainer from './components/InformationHostsContainer';
import InformationSurfersContainer from './components/InformationSurfersContainer';
import LogInContainer from './components/LogInContainer';
import Match from './components/pushMatch';
import ImageSurfer from './components/ImageSurfer';
import ImageHost from './components/ImageHost'
import { BrowserRouter } from 'react-router-dom'
import {Route} from 'react-router-dom'

import InitialButton from './components/InitialButton'






class App extends Component {



  render() {
    return (
        <BrowserRouter>

        <div className="App">
        <header className="App-header">
          <Navbar /> 
        </header>

        <main>
          





          <Route exact path="/surfers/" component={ImageSurfer} />
          <Route exact path="/hosts/" component={ImageHost} />

          <Route exact path="/" component={LogInContainer} />
          <Route exact path="/surfers/" component={InformationSurfersContainer} />
          <Route exact path="/hosts/" component={InformationHostsContainer} /> 

          <Route exact path="/users/" component={InitialButton} />  
          {/* <Route exact path="/users/" component={InformationHostsContainer} />   */}
          <Route exact path="/match/" component={Match} />

          
          
        </main>
      </div>
      </BrowserRouter>
    );
  }

}

export default App;
