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
import { BrowserRouter } from 'react-router-dom'
import {Route} from 'react-router-dom'






class App extends Component {

  render() {
    return (
        <BrowserRouter>

        <div className="App">
        <header className="App-header">
          <Navbar />
        </header>

        <main>
          
          {/* <Navbar /> 
          <Yes />
          <Image />
          <No /> */}

          <Route exact path="/" component={LogInContainer} />
          <Route exact path="/users/" component={InformationSurfersContainer} />
          <Route exact path="/users/" component={InformationHostsContainer} />
          <Route exact path="/match/" component={Match} />

          
          
        </main>
      </div>
      </BrowserRouter>
    );
  }

}

export default App;
