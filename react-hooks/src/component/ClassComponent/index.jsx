import React, { Component } from 'react'
import { Button } from '../ButtonComponent';
import {FunctionComponent} from '../FunctionComponent'

class ClassComponent extends Component {
  constructor(){
    super();
    this.state = {
      //state -> data
      title: "Belajar",
      subTitle: "Selamat Belajar"
    }
  }

  ubahJudul = () => {
    this.setState({
      title: "Kelas FE Siang"
    })
  }

  reset = () => {
    this.setState({
      title: "Belajar"
    })
  }
  //react lifecycle

  render() {
    return (
      <div className="form-signin">
        <h1>Ini adalah class Component</h1>
        <h2>{this.state.title}</h2>
        <h3>{this.state.subTitle}</h3>
        <Button click={this.ubahJudul} title={"ubah"} />
        <Button click={this.reset} title={"reset"} />
        <FunctionComponent b={this.state.title} a={this.state.subTitle}/>
      </div>
    )
  }
}

export default ClassComponent
