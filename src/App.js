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
<<<<<<< HEAD
          <h1>Couchassier</h1>
=======
          <h1>Couch Surfing</h1>
          <h2>Our app is amazing</h2>
>>>>>>> 5657f75fe6783d80d40301fab800d10f951bfc3f
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
