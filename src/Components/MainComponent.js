import React, { Component } from 'react'

import MenuComponent from './MenuComponent'
import {DISHES} from '../shared/dishes'
import {PROMOTIONS} from '../shared/promotions'
import {COMMENTS} from '../shared/comments'
import {LEADERS} from '../shared/leaders'


import CardDetailsComponent from './CardDetailsComponent';
import Comments from './Comments';
import Header from './Header';
import Footer from './Footer';
import Contact from './ContactComponent'

import HomeComponent from './HomeComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
import DishDetailComponent from './DishDetailComponent'


export class MainComponent extends Component {

constructor(props) {
    super(props)

    this.state = {
        dishes: DISHES,
        promotions : PROMOTIONS,
        leaders : LEADERS,
        comments: COMMENTS,
        selectedDish: null
    };
}

onDishClicked = (dishID)=>{
    this.setState({selectedDish: dishID})
}


    render() {

        // const clickedDish = this.state.dishes.filter((dish) => dish.id == this.state.selectedDish)[0]

        
        const home = () => {
            return (<HomeComponent  dish = {this.state.dishes.filter((dish)=> dish.featured)[0]}
                                    promotion = {this.state.promotions.filter((pro)=> pro.featured)[0]}
                                    leader = {this.state.leaders.filter((leader)=> leader.featured)[0]}
                                    ></HomeComponent>)
        }
        

        const menuItem = ({match}) => {

            return(
                <div className = "container">

                    <div className = "row">
                        <div className = "col-12 col-sm-6">
                            
                            <DishDetailComponent dish = {this.state.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId,10))[0]} />

                        </div>
                            
                        <div className = "col-12 col-sm-6">
                            <Comments comments = {this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10) )} />
                        </div>

                    </div>

                </div>

            )

        }



        return (
        <div className = "App">
            <Header></Header>

            <Switch>
                <Route path = "/home" component = {home}/>
                <Route exact path = "/menu" component = {()=> <MenuComponent dishes = {this.state.dishes}/>}/>
                <Route path = "/menu/:dishId" component = {menuItem}/>
                <Route exact path = "/contact" component = {Contact}/>
                <Redirect to = "/home"></Redirect>
            </Switch>

            <Footer></Footer>
        </div>
        )
    }
}

export default MainComponent
