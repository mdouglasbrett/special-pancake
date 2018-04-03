import React from 'react';
import ReactDOM from 'react-dom';
import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducers';
import 'normalize.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import api from './api/api.js';
import { getItems } from './actions/actions';

const store = createStore(reducer, compose(applyMiddleware(...[api(), thunk])));

store.dispatch(getItems());


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
