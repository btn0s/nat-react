import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import App from './containers/app'
import { getAllProducts } from './actions/app/index'

import './index.css'
import 'boxicons/css/boxicons.min.css'

const feather = require('feather-icons')
feather.icons.x.toSvg();
const target = document.querySelector('#root');

window.store = store;
window.getAllProducts = getAllProducts;

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App store={store}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)