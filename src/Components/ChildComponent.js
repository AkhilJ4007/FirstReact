import React from 'react'

function ChildComponent(props) {

   


    return (
        <div>
            <button onClick = {() => props.alert(["hghgv","hghfhgf"])}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
