import React, { Component } from "react";
import SubmitButton from "./components/SubmitButton";
import DatePicker from "react-datepicker";
import TotalPrice from './components/totalPrice'
import "./App.css";
import moment from "moment";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      days: 0,
      totalPrice: 0
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

  handleClick = e => {
    e.preventDefault();
    var start = this.state.startDate.format("L")
    start = start.split('/').join(',')
    var duration = this.state.days
    var totalPrice = 0;
    for(var i = 0; i<= duration;i++){
      if(moment(start).add(i,"days").format("dddd") === "Saturday" || moment(start).add(i,"days").format("dddd") === "Sunday"){
          continue;
      }else if(moment(start).add(i,"days").format("D") <=7){
          totalPrice += 0.05
      }else if(moment(start).add(i,"days").format("D") >=8 && moment(start).add(i,"days").format("D")<=15){
          totalPrice += 0.1
      }else if(moment(start).add(i,"days").format("D") >=16 && moment(start).add(i,"days").format("D")<=22){
          totalPrice += 0.15
      }else if(moment(start).add(i,"days").format("D") >=23 && moment(start).add(i,"days").format("D")<=29){
          totalPrice += 0.2
      }else if(moment(start).add(i,"days").format("D") >=30){
          totalPrice += 0.25
      }
    }
    console.log(totalPrice.toFixed(2))
    this.setState({
      ...this.state,
      totalPrice: totalPrice.toFixed(2)
    })
  }

  render() {
    var price = this.state.totalPrice;
    if(price>0){
      price = <TotalPrice data={this.state.totalPrice}/>
    }else{
      price = <h1>0</h1>;
    }
    return (
      <div className="App">
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
          <input type="number" onChange={this.inputHandler} value={this.state.value}/>
        <SubmitButton action={this.handleClick} />
        {price}
      </div>
    );
  }
}

export default App;
