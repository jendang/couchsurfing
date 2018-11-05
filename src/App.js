import React, { Component } from 'react';
import './App.css';
import Image from './components/Image'
import Information from './components/Information'
import Yes from './components/Yes'
import No from './components/No'
import Navbar from './components/Navbar'


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
