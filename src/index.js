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
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { fetchItems, receiveItems } from './actions/actions';

const store = createStore(reducer, compose(applyMiddleware(thunk)));

// const initialLoad = async () => {
//   store.dispatch(fetchItems());
//   const response = await fetch('http://private-cc77e-aff.apiary-mock.com/posts');
//   return await response.json();
// };
//
// initialLoad()
//   .then(response =>
//     store.dispatch(receiveItems(response)));

store.dispatch(receiveItems());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
