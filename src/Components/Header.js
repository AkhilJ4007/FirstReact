import React, { Component } from 'react'
import { Button, Navbar, NavbarBrand, Jumbotron, Nav, NavItem, Collapse, NavbarToggler } from 'reactstrap'
import {NavLink} from 'react-router-dom'

export class Header extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isOpen : false
        }
    }
    
    toggle = ()=> {
        this.setState({
            isOpen : !this.state.isOpen
        })
    }

    render() {
        return (
        <>
            <Navbar dark color="dark" expand = "sm">
            <div className = "container">
                <NavbarToggler  onClick={this.toggle} />
                <NavbarBrand href = "/"> <img src = './assets/images/logo.png' height = "30" width = "40" /> </NavbarBrand>
                
                <Collapse isOpen = {this.state.isOpen} navbar>
                <Nav className = "ml-auto nav-items-align" navbar >

                    <NavItem > 
                        <NavLink className = "nav-link " to = "/home">
                            <span className = "fa fa-home fa-lg  ">Home</span>
                        </NavLink> 
                    </NavItem>

                    <NavItem> 
                        <NavLink className = "nav-link" to = "/about">
                            <span style ={{float:"left"}} className = "fa fa-info fa-lg">About</span>
                        </NavLink> 
                    </NavItem>

                    <NavItem> 
                        <NavLink className = "nav-link" to = "/menu">
                            <span className = "fa fa-list fa-lg">Menu</span>
                        </NavLink> 
                    </NavItem>

                    <NavItem> 
                        <NavLink className = "nav-link" to = "/contact">
                            <span className = "fa fa-address-card fa-lg">Contact</span>
                        </NavLink> 
                    </NavItem>

                </Nav>
                </Collapse>
            </div>
            </Navbar>
            <Jumbotron>
                <div className = "container">
                    <div className = "row row-header">
                        <div className = "col-12 col-sm-6">
                            <h1>Ristoranteeee Confusion</h1>
                            <p>jhds diahdjsok;fjlhkgd iudsjhflakjhdsfksokd uskdjfk ksduhfj sdlkjfh sdfsd</p>
                        </div>

                    </div>

                </div>
            </Jumbotron>
        </>
        )
    }
}

export default Header
