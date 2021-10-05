import {
  FETCH_LISTS,
  ADD_LIST,
  GET_EDIT_LIST_ID,
  EDIT_LIST,
  DELETE_LIST
} from "../constants/action-types"

export const fetchLists = () => ({
  type: FETCH_LISTS
})

export const addList = (list) => ({
  type: ADD_LIST,
  payload: {list}
})

export const getEditListId = (id) => ({
  type: GET_EDIT_LIST_ID,
  payload: {id}
})

export const editList = (list) => ({
  type: EDIT_LIST,
  payload: {list}
})

export const deleteList = (id) => ({
  type: DELETE_LIST,
  payload: {id}
})