import React, { Component } from 'react';
import {Card,CardBody,CardImg,CardText,CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';

class MenuComponent extends Component {

    constructor(props){
        super(props);
        
    }






    render() {

        const menu = this.props.dishes.map((dish)=>{
            return(
            <div key = {dish.id} className = "col-12 col-md-5 mt-5">
            <Link to={`/menu/${dish.id}`} >
            <Card >
                <CardImg width = "100%" src = {dish.image} alt="Card image cap"/>
            </Card>
            </Link>
            </div>
            );

        });

        return (
            <div className = "row">
                    {menu}     
            </div>
        )
    }
}

export default MenuComponent



