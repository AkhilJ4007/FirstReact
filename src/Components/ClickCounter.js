import React, { Component } from 'react'
import superComp from './SuperComp'

class ClickCounter extends Component {
    constructor(props) {
        super(props)

    }
    
    

    render() {
        return (
            <div>
                <button onClick = {this.props.increment}>Click MEEE {this.props.count}</button>
            </div>
        )
    }
}

export default superComp(ClickCounter)
