import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
import ListComponent from './ListComponent'

 class ParentComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            parentName: "Parent Component",
            list:[],
            flag : false
        }

        
        this.sayHello = this.sayHello.bind(this)


    }

    greetParent = (wdp) => {
        alert(`Hello ${this.state.parentName} sjdas `)
        this.setState({
            list: wdp
        })
    }

    renderList(){
        
    return (this.state.list.map((x,key) => <li key = {key}>{x}</li>))
    }

    sayHello(){
        console.log("Helooooo")
        this.setState({
            flag : true
        })
    }

    addH1(){
        if(this.state.flag === true){
        return (this.state.list.map((x,key) => <h1 key = {key}>{x}</h1>))
        }
    }

    render() {
        return (
            <div>
                <ChildComponent alert = {this.greetParent}/>
                <ul>
                    {
                        this.renderList()
                    }

                </ul>

                <ListComponent list = {this.state.list}  />

                <button onClick = {this.sayHello}>Clicckkkk</button>
                {
                    this.addH1()
                }
            </div>
        )
    }
}

export default ParentComponent
