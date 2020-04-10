import React from 'react';
import ReactDOM from 'react-dom';

/* CeeVee Source */
import './css/default.css';
import './css/layout.css';


/* 외부 스크립트는 어떻게 가져다 쓰는걸까? 
import './js/init';
import './js/jquery-1.10.2.min';
import './js/jquery-migrate-1.2.1.min';
import './js/jquery.fittext';
import './js/jquery.flexslider';
import './js/magnific-popup';
import './js/modernizr';
import './js/waypoints'; */




import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
