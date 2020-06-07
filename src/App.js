import React from 'react';
import './App.css';

import Hello from './Hello';

function App(props) {
  return (
    <div>
      <div><h2>Third Class</h2></div>
      <hr/>
      <div>Hello World from REACT App</div>
      <div>Written in App.js File</div>
      <div>Code by: {props.name}</div>
      <div>My age is: {props.age}</div>
      <hr/>
      <Hello email="zaimeali1997@gmail.com" nick="Zaime" />
    </div>
  );
}

export default App;
