import React, { Component } from 'react'
import superComp from './SuperComp'

 class HoverCounter extends Component {

    constructor(props) {
        super(props)
    }
    

    render() {
        return (
            <div>
                <h1 onMouseOver = {this.props.increment}>The Count is {this.props.count}</h1>
            </div>
        )
    }
}

export default superComp(HoverCounter)
