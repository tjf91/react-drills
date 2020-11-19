import React, { Component } from 'react'

export default class NewTask extends Component{
    constructor() {
        super();
        this.state={
            userInput:''
        }
        this.handleInputChange=this.handleInputChange.bind(this)
        this.handleAddTask=this.handleAddTask.bind(this)
    }




handleInputChange(e){
    console.log(e.target.value)
    this.setState({
        userInput:e.target.value
    })
}





handleAddTask(){
    this.props.add(this.state.userInput)

}

    render(){

        console.log(this.state)

        return(

            <div>
                <input onChange={this.handleInputChange} placeholder="enter text"/>
                <button onClick={this.handleAddTask}>Click meee</button>
            </div>
        )
    }
    
}