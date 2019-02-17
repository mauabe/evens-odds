import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/App';
import combineReducer from './reducers';
import './index.css';


const store = createStore( combineReducer, applyMiddleware(thunk));

console.log('store from createStore', store);
console.log('store.getState() from store', store.getState() );

store.subscribe(() => console.log('store.getState() from subscribe', store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));


