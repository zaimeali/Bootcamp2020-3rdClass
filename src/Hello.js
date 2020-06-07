import React from 'react';
import './App.css';

function Hello({email, nick}) {
  return (
    <div>
      <div>Written in Hello.js File</div>
      <div>My Email is: {email}</div>
      <div>My Nick Name is: {nick}</div>
    </div>
  );
}

export default Hello;
