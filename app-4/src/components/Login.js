import React, { Component } from 'react'


export default class Login extends Component{
    constructor() {
        super();
        this.state={
            userName:'',
            password:''
        }
    }

    handlePassword(val){
        this.setState({
            password:val,
        })
    }
    handleUserName(val){
        this.setState({
            userName:val,
        })
    }
    handleOnClick(){
        alert(`Username: ${this.state.userName} Passoword:  ${this.state.password}`)
    }



    render(){

        return(
            <div>
                <input onChange={e=>this.handleUserName(e.target.value)} placeholder='username' />
                <input onChange={e=>this.handlePassword(e.target.value)} placeholder='password' />
                <button onClick={()=>this.handleOnClick()}>clicky here</button>
            </div>
        )
    }



}