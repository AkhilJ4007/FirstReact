import React from 'react';
import {Card,CardBody,CardImg,CardText,CardTitle} from 'reactstrap';

function CardDetailsComponent(props) {

    
    
    if(props.dish != null){
    return(
        <div className = "col-12 col-md-5">
        <Card>
            <CardImg width = "100%" src = {props.dish.image} alt="Card image cap"/>
            <CardBody>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>{props.dish.description}</CardText>
            </CardBody>
        </Card>
        </div>
    )
    }
    else {
        return(
            <div></div>
        )
    }
}

export default CardDetailsComponent;
