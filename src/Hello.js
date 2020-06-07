import React from 'react';
import './Hello.css';

function Hello({email, nick}) {
  return (
    <div className="hello">
      <div>Written in Hello.js File</div>
      <div>My Email is: {email}</div>
      <div>My Nick Name is: {nick}</div>
    </div>
  );
}

export default Hello;
