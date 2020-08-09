import React from 'react'
import {Card,CardBody,CardImg,CardText,CardTitle, CardSubtitle} from 'reactstrap';



function RenderCard(props) {
    return (
        <>
        <Card>
            <CardImg width = "100%" src = {props.image} alt="Card image cap"/>
            
            <CardBody>
                <CardTitle>{props.name}</CardTitle>
                {props.cardDesignation && <CardSubtitle>{props.cardDesignation}</CardSubtitle>}
                <CardText>{props.description}</CardText>
            </CardBody>
            
        </Card>   
        </>
    )
}





function HomeComponent(props) {
    return (
        <div className="container">
            <div className = "row align-items-start">

                    <div className = "col-12 col-md">
                        <RenderCard image = {props.dish.image} name = {props.dish.name} description = {props.dish.description}></RenderCard>
                    </div>
                    <div className = "col-12 col-md">
                        <RenderCard image = {props.promotion.image} name = {props.promotion.name} description = {props.promotion.description}></RenderCard>
                    </div>
                    <div className = "col-12 col-md">
                        <RenderCard image = {props.leader.image} name = {props.leader.name} description = {props.leader.description} cardDesignation = {props.leader.designation}></RenderCard>
                    </div>

            


            </div>
        </div>
    )
}

export default HomeComponent;
