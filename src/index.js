import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/styles/global.scss'
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from './redux/reducers/rootReducer';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));
window.store = store;


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <Router>
              <App />
          </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
