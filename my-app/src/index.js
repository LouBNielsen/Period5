import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Grades from './grades'

let students = [
      {id: 1, name: "studentA", grade: 7},
      {id: 2, name: "studentB", grade: 10},
      {id: 3, name: "studentC", grade: 4},
      {id: 4, name: "studentD", grade: 12},
    ]

/*ReactDOM.render(
  <App name="Louise Nielsen" />,
  document.getElementById('root')
);
*/

ReactDOM.render(
  <Grades data={students}/>,
  document.getElementById('root')
);