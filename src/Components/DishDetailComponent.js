import React from 'react'
import {Card,CardBody,CardImg,CardText,CardTitle} from 'reactstrap';

function DishDetailComponent({dish}) {
    return (
        <>
            <Card>
                <CardImg width = "100%" src = {dish.image} alt="Card image cap"/>
                <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </>
    )
}

export default DishDetailComponent
