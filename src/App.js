import React, { Component } from 'react';
import './App.css';
import Image from './components/Image'
import Yes from './components/Yes'
import No from './components/No'
import Navbar from './components/Navbar'
import InformationHostsContainer from './components/InformationHostsContainer';
import InformationSurfersContainer from './components/InformationSurfersContainer';
import LogInContainer from './components/LogInContainer';
import Match from './components/pushMatch';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Couchaisseur</h1>
        </header>

        <main>
          <Navbar />
          <Yes />
          <Image />
          <No />
          <InformationHostsContainer /> 
          <InformationSurfersContainer />
          <LogInContainer />
          <Match />
          
        </main>
      </div>
    );
  }
}

export default App;
