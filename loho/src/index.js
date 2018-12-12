import React from 'react';
import {render} from 'react-dom';
import {HashRouter} from 'react-router-dom';

import App from './App';
//import './css/font-awesome-4.7.0/css/font-awesome.css';
import {Provider} from 'react-redux';
import store from './store';

render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>, 
    document.getElementById('root')
);
