import React from 'react'

class EditContact extends React.Component {
  constructor(props){
    super(props)
    const {id, name, email} = props.location.state.contact;
    this.state = {
      id,
      name,
      email
    }
  }

  update = (e) => {
    e.preventDefault()
    if(this.state.name ==="" || this.state.email ===""){
      alert("data harus diisi")
      return;
    }
    this.props.updated(this.state)
    this.setState({name:"", email:""})
    this.props.history.push('/') //render ke routernya
  }

  render() {
    return (
      <div>
        <div className="ui main">
          <h2>Edit Contact</h2>
          <form className="ui form" onSubmit={this.update}>
            <div className="field">
              <label>Name</label>
              <input 
                type="text"
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={(e) => this.setState({name: e.target.value})}
              />
            </div>
            <div className="field">
              <label>Email</label>
              <input 
                type="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={(e) => this.setState({email: e.target.value})}
              />
            </div>
            <div>
              <button className="ui button blue">Update</button>
            </div>
          </form>
        </div>
      </div>
    )
    }
  }

  export default EditContact