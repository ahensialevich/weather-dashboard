import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
//import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
//import { Provider } from 'react-redux';
//import createSagaMiddleware from 'redux-saga';


//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//const rootReducer = combineReducers();
//const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//     rootReducer,
//     composeEnhancers(applyMiddleware(sagaMiddleware))
// );

//sagaMiddleware.run(watchAuth);

const app = (
    // <Provider store={store}>
    <App />
    //  </Provider>
);


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
