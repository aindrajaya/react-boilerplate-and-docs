import React, { Component } from "react";
import ShowClass from "./showclass";
import "./styles.css";

class ContohLifecycle extends Component {
  constructor() {
    super();
    this.state = {
      class: "Default Data"
    };
    console.log("[App.js] - constructor");
  }

  componentDidMount = () => {
    console.log("[App.js] - componentDidMount");
  };

  componentDidUpdate = () => {
    console.log("[App.js] - componentDidUpdate");
  };

  changeClass = (id) => {
    let result;
    switch (id) {
      case "FE":
        result = "Front End";
        break;
      case "BE":
        result = "Back End";
        break;
      case "RN":
        result = "React Native";
        break;
      default:
        console.log("Wrong ID Class");
    }

    this.setState({ class: result });
  };

  handleChange = (event) => {
    this.setState({ class: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.class);
  };

  render() {
    console.log("[App.js] - render");
    return (
      <div className="App">
        <h1>React Lifecycle</h1>
        <ShowClass name={this.state.class} />
        <button onClick={() => this.changeClass("FE")}>FE</button>
        <button onClick={() => this.changeClass("BE")}>BE</button>
        <button onClick={() => this.changeClass("RN")}>RN</button>
      </div>
    );
  }
}

export default ContohLifecycle;
