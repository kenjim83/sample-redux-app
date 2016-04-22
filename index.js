import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

let localState = localStorage.getItem("appState")

let store = createStore(todoApp, JSON.parse(localState) || {})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('output')
)

window.onbeforeunload = saveStateOnExit;
function saveStateOnExit(){
    // localStorage.setItem("appState", JSON.stringify(store.getState()));
}
