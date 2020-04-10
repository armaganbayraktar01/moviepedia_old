import React from 'react';
import ReactDOM from 'react-dom';
//import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Store işlemleri
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';

//Redux Thunk İşlemleri
import thunk from 'redux-thunk';
 
// Redux Logger İşlemleri
import logger from 'redux-logger'
// redux-promise-middleware İşlemleri
import promise from 'redux-promise-middleware'

// Provider İşlemleri
import { Provider } from 'react-redux';

// React Router İşlemleri
import { BrowserRouter } from 'react-router-dom';

// Redux-Dev Tools Extensions
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(promise, thunk, logger)
    )
);
 
ReactDOM.render( 
    <BrowserRouter>
        <Provider store = { store }>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

// Service Worker İşlemleri
serviceWorker.unregister();
