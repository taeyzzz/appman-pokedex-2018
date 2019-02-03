import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import Application from './containers/Application'

import './index.css'

const store = configureStore()


ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root')
)
