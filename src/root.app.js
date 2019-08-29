import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import App from './App.js';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter  
});

export const bootstrap = [
  reactLifecycles.bootstrap,
];

export const mount = [
  reactLifecycles.mount,
];

export const unmount = [
  reactLifecycles.unmount,
];


function domElementGetter() {
    let el = document.getElementById("root");
    if (!el) {
      el = document.createElement('div');
      el.id = 'root';
      document.body.appendChild(el);
    }
  
    return el;
  }
  