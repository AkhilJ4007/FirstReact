import React from 'react'

function Comments(props) {

    let comments;
    if(props.dish != null){
        comments = props.dish.comments.map((comment, id)=>{
        return(
            <li key = {id}>
                <h4>
                {comment.author} 
                </h4>
                <div>
                {comment.comment} 
                </div>
            </li>
        );

    });
    }

    else{
        comments = <div></div>
    }

    if(props.dish === null){
    return (
        <div>
            
        </div>
    )
    }
    else{
        return(
            <div className = "col-12 col-md-5" >
            <h2>Comments</h2>
            <ul style = {{listStyle : "none", padding: 0}}>
                {comments}
            </ul>
            </div>

        )
    }
}

export default Comments
