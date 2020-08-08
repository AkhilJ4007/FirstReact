import React, { Component } from 'react'

import MenuComponent from './MenuComponent'
import {DISHES} from '../shared/dishes'
import CardDetailsComponent from './CardDetailsComponent';
import Comments from './Comments';
import Header from './Header';
import Footer from './Footer';

import HomeComponent from './HomeComponent';
import {Switch, Route, Redirect} from 'react-router-dom';


export class MainComponent extends Component {

constructor(props) {
    super(props)

    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
}

onDishClicked = (dishID)=>{
    this.setState({selectedDish: dishID})
}


    render() {

        // const clickedDish = this.state.dishes.filter((dish) => dish.id == this.state.selectedDish)[0]

        const home = () => <HomeComponent/>
        

        return (
        <div className = "App">
            <Header></Header>

            <Switch>
                <Route path = "/home" component = {home}/>
                <Route exact path = "/menu" component = {()=> <MenuComponent dishes = {this.state.dishes}/>}/>
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
