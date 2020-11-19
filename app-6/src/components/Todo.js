import React, { Component } from 'react'

export default class Todo extends Component{

    constructor(){
        super()

    }

    render(){



    

        return(
            <div>{this.props.task}</div>
        ) 

}


}