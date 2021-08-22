import { Types } from "../actions/users";

const initialState = {
  users: []
}

export default function users(state = initialState, action){
  switch (action.type) {
    case Types.GET_USERS_SUCCESS:
      return {
        users: action.payload.users
      }
    default:
      return state;
  }
}