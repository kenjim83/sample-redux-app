import 'babel-polyfill'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { selectSubreddit, fetchPostsIfNeeded } from './actions/index'


import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import Root from './containers/Root'


// EXAMPLE ASYNC STATE MUTATION & LOGGING TO CONSOLE

// const loggerMiddleware = createLogger()
// const store = createStore(
//     rootReducer,
//     applyMiddleware(
//         thunkMiddleware, // allows dispatch() functions
//         loggerMiddleware // middleware that logs actions
//     )
// )

// console.log(selectSubreddit)
// store.dispatch(selectSubreddit('gaming'))
// store.dispatch(fetchPostsIfNeeded('gaming')).then(() =>
//   console.log(store.getState())
// )


ReactDOM.render(
  <Root />,
  document.getElementById('output')
)

