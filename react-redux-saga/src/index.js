import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './sagas';

//styling
import 'bootstrap/dist/css/bootstrap.min.css';

//saga
const sagaMiddleware = createSagaMiddleware()

//global store
const store = createStore(reducers, applyMiddleware(sagaMiddleware))

//run saga
sagaMiddleware.run(rootSaga)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

