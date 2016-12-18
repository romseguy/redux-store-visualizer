import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import DevTools from './containers/DevTools'
import App from './containers/App'
import configureStore from './store/configureStore'
import 'todomvc-app-css/index.css'

const store = configureStore()

render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
)
