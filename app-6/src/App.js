import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';

class App extends Component {
  constructor(){
    super()

    this.state={
      userInput:'',
      list:[],
    }

  }

handleInput(val){
  this.setState({
    userInput:val,    
  })
      console.log(val)
    }
    handleAddTask(){
      this.setState({
        list:[...this.state.list,this.state.userInput]
      })
      
    }


  render(){
    console.log(this.state)

    const mapped = this.state.list.map((item,i)=>{
      return(
        <Todo task={item} key={(i)}/>
      )
    })

    
  return (
    <div className="App">
      <h4>TODO APP</h4>
      <input onChange={e=>this.handleInput(e.target.value)} value={this.state.userInput}/>
      <button onClick={()=>this.handleAddTask()}>Click to add</button>
      <div>{mapped}</div>
      

    </div>
  );
}
}
export default App;
