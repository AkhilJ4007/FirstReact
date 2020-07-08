import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComponent from './RegCompoenent'

 class ParentComp extends Component {

   

    constructor(props) {
        super(props)
    
        this.state = {
            test : "YOOOOO",
            ma : ["fdgdfg","ewrwer"]
        }

    }

    componentDidMount(){
        setInterval(() => {
            this.setState((prevState) => ({ma : prevState.ma.concat("mmmmmm")}) )
            
        }, 2000);
    }


    render() {
        console.log("********Parent Rendered*********")
        return (
          
            <div>
            <PureComp test = {this.state.ma} />
            <RegComponent test = {this.state.ma} />        
            </div>
        )
    }
}

export default ParentComp
