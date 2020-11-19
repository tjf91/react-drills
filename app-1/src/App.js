import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      userInput:''
    }
    this.handleInputChange=this.handleInputChange.bind(this)
  }

  handleInputChange(e){
    this.setState({
      userInput:e.target.value
    })
    console.log(this.state)
  }
  



render(){


  return (
    <div className="App">
     <input onChange={this.handleInputChange} placeholder="Insert Text"/>
  <div>{this.state.userInput}</div>
    </div>
  );
}
}
export default App;
