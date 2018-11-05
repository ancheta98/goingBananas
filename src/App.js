import React, { Component } from "react";
import UserInput from "./components/userInputDate";
import SubmitButton from "./containers/SubmitButton";
import DatePicker from "react-datepicker";
import "./App.css";
import moment from "moment";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      days: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
    console.log(date.format("L"));
  };
  inputHandler = e => {
    this.setState({
      ...this.state,
      days: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
          <input type="number" onChange={this.inputHandler} value={this.state.value}/>
        <SubmitButton stateDate={this.state.startDate} stateDays={this.state.days} />
      </div>
    );
  }
}

export default App;
