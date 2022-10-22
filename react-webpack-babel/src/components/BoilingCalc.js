import React, { Component } from "react";

const BoilingVerdict = (props) => {
  if(props.celcius >= 100) {
    return <p>The water would boil!</p>
  }
  return <p>The water would not boil</p>
}

class BoilingCalc extends Component {
  constructor(props){
    super(props);
    this.state = {temperature: ''}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({temperature: e.target.value})
  }

  render(){
    const temperature = this.state.temperature;
    return(
      <fieldset>
        <legend>Enter temperature in Celcius: </legend>
        <input 
          value={temperature}
          onChange={this.handleChange}
        />
        <BoilingVerdict celcius={parseFloat(temperature)}/>
      </fieldset>
    )
  }
}

export default BoilingCalc;