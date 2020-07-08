import React ,  {PureComponent} from 'react'

 class PureComp extends PureComponent {

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

export default PureComp
