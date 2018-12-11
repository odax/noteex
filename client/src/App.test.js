import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContextProvider } from './AppContext';
import { BrowserRouter as Router } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Router>
    ,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});