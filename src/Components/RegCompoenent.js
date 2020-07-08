import React , {Component} from 'react'

 class RegCompoenent extends Component {

    constructor(props) {
        super(props)
    
        
    }
    
    

    render() {

        console.log("Render");
        return (
            <div>
                <h1>{this.props.test}</h1>
                
            </div>
            
        )
    }
}

export default RegCompoenent;
