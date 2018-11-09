import React, { Component } from 'react';
import './App.css';
import InformationHostsContainer from './components/InformationHostsContainer';
import InformationSurfersContainer from './components/InformationSurfersContainer';
import LogInContainer from './components/LogInContainer';
import { BrowserRouter } from 'react-router-dom'
import {Route} from 'react-router-dom'
import InitialButton from './components/InitialButton'
import MatchingHost from './components/MatchingHost';
import MatchingSurfer from './components/MatchingSurfer';


class App extends Component {



  render() {
    return (
    <BrowserRouter>
      <div className="App">
          <header className="App-header">
          </header>

        <main>
          <Route exact path="/" component={LogInContainer} />
          <Route exact path="/users/" component={InitialButton} />  
          <Route exact path="/surfers/" component={InformationSurfersContainer} />
          <Route exact path="/hosts/" component={InformationHostsContainer} /> 
          <Route exact path="/matching-host/" component={MatchingHost} />
          <Route exact path="/matching-surfer/" component={MatchingSurfer} />
        </main>
      </div>
    </BrowserRouter>
    );
  }

}

export default App;
