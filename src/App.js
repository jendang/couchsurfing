import React, { Component } from 'react';
import './App.css';
import Image from './components/image'
import Information from './components/information'
import Yes from './components/yes'
import No from './components/no'


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
          <Information /> 
        </main>
      </div>
    );
  }
}

export default App;
