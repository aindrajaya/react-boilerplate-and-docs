import React from 'react'
import { Provider } from 'react-redux'
import MainTodoSaga from './components'
import store from './store'


export default function TodoListSaga() {
  return (
    <Provider store={store}>
      <MainTodoSaga />
    </Provider>
  )
}
