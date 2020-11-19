import React, { Component } from 'react'
import Todo from './Todo'

export default class List extends Component {
    constructor(){
        super()
        
    }


    render(){
        
        const list=this.props.list.map((items,i)=>{
            return(
                 <Todo key={i} task={items}/>
            )
        })


        return(
            <div>{list}</div>     
                               
        )
    }

}