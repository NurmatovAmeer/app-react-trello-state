import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import Trello from "./components/Trello";


ReactDOM.render(
  <React.StrictMode>
    <Trello />
  </React.StrictMode>,
  document.getElementById('root')
);

