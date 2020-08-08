import React from 'react'



function SlotMachine(props) {

    const firstElement = props.result[0];

    const para = (result)=>{
    return result.map((x,key)=><p key = {key}>{x}</p>)
    }

    const winner = props.result.every((x)=> x===firstElement);

    return (
        <div>
           {para(props.result)}
           {<p>Winner</p> && winner}
           {<p>Loser</p> && !winner}
        </div>
    )
}

export default SlotMachine
