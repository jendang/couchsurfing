import React, { Component } from 'react';
import './App.css';
import Image from './components/Image'

import Yes from './components/Yes'
import No from './components/No'
import Navbar from './components/Navbar'
import InformationHostsContainer from './components/InformationHostsContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Couchassier</h1>
        </header>

        <main>
          <Navbar />
          <Yes />
          <Image />
          <No />
          <InformationHostsContainer /> 
        </main>
      </div>
    );
  }
}

export default App;
