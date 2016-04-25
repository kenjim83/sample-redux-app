import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import RedditsApp from './RedditsApp'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <RedditsApp />
      </Provider>
    )
  }
}
