import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTask from './components/NewTask';
import List from './components/List';

class App extends Component {

  constructor(){
    super()
    this.state={
      taskList:[],
    }

    this.addTaskList=this.addTaskList.bind(this)
  }

  addTaskList(task){
    this.setState({
      taskList:[...this.state.taskList,task]
    })
  }


  render(){

 
  return (
    <div className="App">
      <NewTask add={this.addTaskList}/>
      <List list={this.state.taskList}/>
    </div>
  );
}
}
export default App;
