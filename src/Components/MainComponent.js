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


export class MainComponent extends Component {

constructor(props) {
    super(props)

    this.state = {
        dishes: DISHES,
        promotions : PROMOTIONS,
        leaders : LEADERS,
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

        return (
        <div className = "App">
            <Header></Header>

            <Switch>
                <Route path = "/home" component = {home}/>
                <Route exact path = "/menu" component = {()=> <MenuComponent dishes = {this.state.dishes}/>}/>
                <Route exact path = "/contact" component = {Contact}/>
                <Redirect to = "/home"></Redirect>
            </Switch>

            {/* <div className = "container">
            <MenuComponent dishes = {this.state.dishes} onDishClick = {this.onDishClicked}></MenuComponent>
            <div className = "row mt-5">
                <CardDetailsComponent  dish = {clickedDish}/>
                <Comments dish = {clickedDish}></Comments>
            </div>
            </div> */}
            <Footer></Footer>
        </div>
        )
    }
}

export default MainComponent
