// This is similar to the java concept of super classes where we group common methods and properties and place it in a super class

import React, { Component } from 'react'

const superComp = (SomeComponent) => {


    
   class NewComp extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    increment = () =>{
        this.setState(prevState =>{ return {count: prevState.count + 1 }})
    }

        render() {
            return (
                <div>
                    <SomeComponent count = {this.state.count} increment = {this.increment}></SomeComponent>
                </div>
            )
        }

   }

   return NewComp

}

export default superComp;














