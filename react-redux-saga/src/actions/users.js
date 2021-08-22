//Prefix Type => 1. Create action Types with prefix
export const Types = {
  GET_USERS_REQUEST: 'GET_USERS_REQUEST',
  GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
  CREATE_USER_REQUEST: 'CREATE_USER_REQUEST'
}

//2. action for get user (request(load halaman) and success)
//request
export const getUsersRequest = () => ({
  type: Types.GET_USERS_REQUEST
})
//success
export const getUsersSuccess = ({users}) => ({
  type: Types.GET_USERS_SUCCESS,
  payload: {
    users
  }
})

//3. action for create user
export const createUserRequest = ({firstName, lastName}) => ({
  type: Types.CREATE_USER_REQUEST,
  payload: {
    firstName,
    lastName
  }
})