import React from 'react'

import { Provider } from 'react-redux'
import AppAuth from './App'
import store from './store'

export default function UserSagaAuth() {
  return (
    <Provider store={store}>
      <AppAuth />
    </Provider>
  )
}