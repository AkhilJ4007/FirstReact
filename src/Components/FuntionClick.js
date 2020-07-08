import React from 'react'

function FunctionClick(){

    const clickHandler = () => console.log("Clickedf")
   
    return (
    <button onClick = {clickHandler}>
        Click me baby 1 more time
    </button>
    )
}

export default FunctionClick;