import React from 'react'

function ListComponent(props) {

    const listFunction = props.list.map((x,key) => <li key = {key}> {x} </li>)

    return (
        <div>
            <ul>
                {
                    listFunction
                }
            </ul>
        </div>
    )
}

export default ListComponent
