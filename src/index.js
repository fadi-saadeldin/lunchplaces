import React from 'react';
import ReactDOM from 'react-dom';

import styles from './App.css';
import App from './App';

function render(Component) {
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    );
}

render(App);
