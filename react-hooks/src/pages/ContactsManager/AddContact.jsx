import React, { Component } from 'react'

class AddContact extends Component {
  state = {
    name:"",
    email:"",
  }

  add = (e) => {
    e.preventDefault()
    //jika salah satu kolom kosong, maka akan keluar alert
    if(this.state.name === "" | this.state.email === ""){
      alert("kolom kosong, tolong diisi terlebih dahulu")
      return;
    }
    //jika sudah terisi semua
    //proses addContactHandler ==> yg akan menyambunkan ke API post method
    this.props.addContactHandler(this.state)
    this.setState({name:"", email:""})
    this.props.history.push('/') //render ke routernya
  }

  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
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
            <button className="ui button blue">Add</button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddContact
