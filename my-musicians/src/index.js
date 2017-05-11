import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Musicians from './musicians'

let musicians= [
      {id: 1, name: "James Hetfield", stars: 8},
      {id: 2, name: "Tina Turner", stars: 6},
      {id: 3, name: "Chris Martin", stars: 8},
      {id: 4, name: "Madonna", stars: 5},
      {id: 5, name: "Emmelie de Forest", stars: 1}  
 ]

ReactDOM.render(
  <Musicians data={musicians} />,
  document.getElementById('root')
);
