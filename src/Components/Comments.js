import React from 'react'

function Comments({comments}) {

    let renderComments;
    if(comments != null){
        renderComments = comments.map((comment, id)=>{
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
        renderComments = <div></div>
    }

    return(
            <div className = "col-12 col-md-5" >
            <h2>Comments</h2>
            <ul style = {{listStyle : "none", padding: 0}}>
                {renderComments}
            </ul>
            </div>

        )
    
}

export default Comments
