

import './App.css';
import { Button, Navbar, NavbarBrand } from 'reactstrap'
import MenuComponent from './Components/MenuComponent'
import {DISHES} from './shared/dishes'


import React, { Component } from 'react'

class App extends Component {

  constructor(props){
    super(props);

    this.state = {

      dishes: DISHES

  };

  }


  render() {
    return (
      <div className = "App">
        <Navbar dark color="dark" expand = "sm">
          <div className = "container">
  
            <NavbarBrand href = "/"> WADDUPPP </NavbarBrand>
  
          </div>
  
        </Navbar>
  
        <MenuComponent dishes = {this.state.dishes}></MenuComponent>
  
      </div>
    );
  }
}

export default App;

