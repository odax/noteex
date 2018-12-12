import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContextProvider } from './AppContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow } from 'enzyme';

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

const app = shallow(<App />)

it('matches snapshot', () => {
  expect(app).toMatchSnapshot();
});