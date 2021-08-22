import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsersRequest, createUserRequest } from '../actions/users'
import AddUser from './AddUser'
import ListsUsers from './ListsUsers'

class App extends Component {
  constructor(props){
    super(props)
    //to call the global state
    this.props.getUsersRequest()
  }

  handleSubmit = ({firstName, lastName}) => {
    console.log(firstName, lastName)
    this.props.createUserRequest({
      firstName,
      lastName
    })
  }

  render() {
    const data = this.props.users
    console.log(data)
    return (
      <div style={{margin:'0 auto', padding: '20px'}}>
        <AddUser onSubmit={this.handleSubmit}/>
        <ListsUsers users={data.users}/>
      </div>
    )
  }
}

export default connect(({users}) => ({users}), {
  getUsersRequest,
  createUserRequest
})(App)
