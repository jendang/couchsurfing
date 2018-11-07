import React, { Component } from 'react';
import './App.css';
import Yes from './components/Yes'
import No from './components/No'
import Navbar from './components/Navbar'
import InformationHostsContainer from './components/InformationHostsContainer';
import InformationSurfersContainer from './components/InformationSurfersContainer';
import LogInContainer from './components/LogInContainer';
import Match from './components/pushMatch';
import { BrowserRouter } from 'react-router-dom'
import {Route} from 'react-router-dom'
import Users from './components/Users'






class App extends Component {

  render() {
    return (
        <BrowserRouter>

        <div className="App">
<<<<<<< HEAD
        <header className="App-header">
          <Navbar /> 
        </header>
=======
        
        <Navbar />
        
>>>>>>> bef170e04261af35b836c0cb179e0330a1ed8fb9

        <main>
          
          {/* <Navbar /> 
          <Yes />
          <Image />
          <No /> */}

          <Route exact path="/" component={LogInContainer} />
          <Route exact path="/surfers/" component={InformationSurfersContainer} />
          <Route exact path="/hosts/" component={InformationHostsContainer} /> 

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
