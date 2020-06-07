import React from 'react';
import './App.css';

function App(props) {
  return (
    <div>
      <div><h2>Third Class</h2></div>
      <div>Hello World from REACT App</div>
      <div>Written in App.js File</div>
      <div>Code by: {props.name}</div>
    </div>
  );
}

export default App;
