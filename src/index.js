import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import rootReducer from './store/reducer';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));


const store = createStore(rootReducer, applyMiddleware(thunk));

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
reportWebVitals();
