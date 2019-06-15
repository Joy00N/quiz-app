import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';

function render() {
    ReactDOM.render(
        <App/>
        , document.getElementById('root'));
}

render();
serviceWorker.unregister();
