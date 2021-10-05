import React, {Fragment, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchLists } from '../actions'
import Add from './Add'
import Item from './items'

//component import

const MainTodoSaga = () => {
  const lists = useSelector(state => state.lists)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchLists())
  }, [dispatch])

  const renderLists = () => 
  lists.length > 0 ? (
    lists.map(list => <Item key={list.id} list={list}/>)
  ) : (
    <p>Loading ...</p>
  )

  return (
    <Fragment>
      <Add />
      {renderLists()}
    </Fragment>
  )
}

export default MainTodoSaga