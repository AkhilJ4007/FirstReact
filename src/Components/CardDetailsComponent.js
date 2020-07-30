import React from 'react';
import {Card,CardBody,CardImg,CardText,CardTitle} from 'reactstrap';

function CardDetailsComponent(props) {

    
    
    if(props.dish != null){
    return(
        <Card className = "col-12 col-md-5">
               <CardImg width = "100%" src = {props.dish.image} alt="Card image cap"/>
               <CardBody>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>{props.dish.description}</CardText>
               </CardBody>
        </Card>
    )
    }
    else {
        return(
            <div></div>
        )
    }
}

export default CardDetailsComponent;
