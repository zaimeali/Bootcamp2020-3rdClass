import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  // React.createElement('h1', null, "h1 tag created by React.createElement"),
  // React.createElement('h1', null, React.createElement('span', null, "Span nested in h1")),
  <App />,
  document.getElementById('root')
);