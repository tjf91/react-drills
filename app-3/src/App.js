import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      userInput:"",
      list:["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    }
    this.handleUserInput=this.handleUserInput.bind(this)
  }
  handleUserInput(e){
    this.setState({
      userInput:e.target.value
    })
    
  }

  render(){
  return (
    <div className="App">
      <input onChange={this.handleUserInput} placeholder='filter'/>
   <div> {this.state.list.filter(item=>item.includes(this.state.userInput)).map((item) => <h1 key={item}>{item}</h1>)  }   </div>

    </div>
  );
}
}
export default App;
