import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import registerServiceWorker from './serviceWorker.js';
import {registerApplication, start} from 'single-spa';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

registerApplication(
    'root',          // Name of this single-spa application
    () => import('./root.app.js'),
    () => true
  );
  
  start();

  // serviceWorker.register();
