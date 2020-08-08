import React, { Component } from 'react';
import {Card,CardBody,CardImg,CardText,CardTitle} from 'reactstrap';
import CardDetailsComponent from './CardDetailsComponent';
import Comments from './Comments';

class MenuComponent extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            selectedDish: null
        }
        
    }


    onDishClicked = (dish) =>{

        this.props.onDishClick(dish.id)
        this.setState({
            selectedDish: dish
        })
    }

    
    renderDish = (dish) =>{

        if(this.state.selectedDish === null){
            return(<div></div>)
        }
        else{
        return(
            <Card>
                <CardImg width = "100%" src = {dish.image} alt="Card image cap"/>
                <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
        }
    }

    
    getDescription = (name) =>{  

        if(this.state.selectedDish != null && name === this.state.selectedDish.name){
            
            return(
                <CardBody>
                <CardTitle>{this.state.selectedDish.name}</CardTitle>
                <CardText>{this.state.selectedDish.description}</CardText>
                </CardBody>
            )
        }
        return(
            <div></div>
        )
        
    }


    render() {

        const menu = this.props.dishes.map((dish)=>{
            return(
            <div key = {dish.id} className = "col-12 col-md-5 mt-5">
            <Card onClick = {()=>{this.onDishClicked(dish)}}>
                <CardImg width = "100%" src = {dish.image} alt="Card image cap"/>
                {
                    this.getDescription(dish.name)
                }
                
                </Card>
            </div>
            );

        });

        return (
            <div>

                <div className = "row">
                    {menu}
                </div>
                
            </div>
        )
    }
}

export default MenuComponent



