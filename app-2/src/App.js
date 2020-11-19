import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state={
      list:["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    }
  }



  render(){
  return (
    <div className="App">
      {this.state.list.map(stuff=><h1 key={stuff}>{stuff}</h1>)}
    </div>
  );
}
}
export default App;
