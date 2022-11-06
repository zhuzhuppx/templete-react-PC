import React from 'react';
import ReactDOM from 'react-dom';
import RouterConfig from './router';
import { Provider } from 'react-redux'
import store from './store'
import './base.less'

ReactDOM.render(
  <Provider store={store}><RouterConfig /></Provider>,
  document.getElementById('root')
);