import React, { Component } from 'react';

//import context
import { AppContextConsumer } from './AppContext';
import Main from './components/Main/Main';
import LandingPage from './components/LandingPage/LandingPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <AppContextConsumer>
        {value => (
          <div className="App">
            {value.AppState.authenticated ? <Main /> : <LandingPage />}
          </div>
        )}
      </AppContextConsumer>
    );
  }
}

export default App;
