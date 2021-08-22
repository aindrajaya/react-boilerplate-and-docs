import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3006'

//Get users
export const getUsers = () => {
  return axios.get('/users')
}

//create user
export const createUser = ({firstName, lastName}) => {
  try {
    return axios.post('/users', {
      firstName,
      lastName
    })
  } catch (error) {
    
  }
}