import React, { Component } from "react";

class ShowClass extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("[ShowClass.js] - constructor");
  }

  componentDidMount = () => {
    console.log("[ShowClass.js] - componentDidMount");
  };

  componentDidUpdate = () => {
    console.log("[ShowClass.js] - componentDidUpdate");
  };

  render() {
    console.log("[ShowClass.js] - render");
    return <h3>Hello, {this.props.name}!</h3>;
  }
}

export default ShowClass;
