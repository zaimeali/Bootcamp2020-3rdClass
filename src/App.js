import React from 'react';
import './App.css';

function App(props) {
  return (
    <div>
      <div><h2>Third Class</h2></div>
      <hr/>
      <div>Hello World from REACT App</div>
      <div>Written in App.js File</div>
      <hr/>
      <div>Code by: {props.name}</div>
      <div>My age is: {props.age}</div>
    </div>
  );
}

export default App;
