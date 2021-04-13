import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import initialize from './init';

initialize();

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
