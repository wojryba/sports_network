/* eslint linebreak-style: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux';
import configureStore from './app/store/configureStore';

import App from './app/containers/App';

import './index.css';

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
     <App/>
   </BrowserRouter>
  </Provider>
  ),
  document.getElementById('root')
);
