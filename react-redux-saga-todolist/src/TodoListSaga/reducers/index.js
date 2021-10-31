import { 
  FETCH_LISTS_SUCCESS,
  ADD_LIST_SUCCESS,
  GET_EDIT_LIST_ID,
  EDIT_LIST_SUCCESS,
  DELETE_LIST_SUCCESS 
} from "../constants/action-types"

const initialState = {
  lists: [],
  editId: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LISTS_SUCCESS:
      console.log("reducer FETCH_LISTS_SUCCESS", action.payload.lists)
      return {
        ...state,
        lists: [
          ...state.lists, 
          ...action.payload.lists
        ]
      }
    case ADD_LIST_SUCCESS:
      console.log("reducer ADD_LIST_SUCCESS", action.payload.list)
      return {
        ...state,
        lists: [
          ...state.lists, 
          ...action.payload.list
        ]
      }
    case GET_EDIT_LIST_ID:
      console.log("reducer GET_EDIT_LIST_ID", action.payload.id)
      return {
        ...state,
        editId: action.payload.id
      }
    case EDIT_LIST_SUCCESS:
      const newLists = state.lists.map(item => 
        item.id = action.payload.list.id ? action.payload.list : item  
      );
      console.log("reducer EDIT_LIST_SUCCESS", newLists)
      return{
        ...state,
        lists: [...newLists],
        editId: null
      }
    case DELETE_LIST_SUCCESS:
      console.log("reducer DELETE_LIST_SUCCESS", action.payload.id)
      const newList = state.lists.filter(list => list.id !== action.payload.id)
      return {
        ...state,
        lists: [...newList]
      }
    default:
      return {...state}
  }
}

export default reducer