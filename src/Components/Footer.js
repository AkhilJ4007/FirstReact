import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className = "container mt-5">
            <div className = "row">
                <div className = "col-6 col-sm-3">
                    <h1>Links</h1>
                    <ul>
                        <li> <Link to = "/home">Home</Link></li>
                        <li> <Link to = "/about">About</Link></li>
                        <li> <Link to = "/menu">Menu</Link> </li>
                        <li> <Link to = "/contact">Contact</Link> </li>
                    </ul>

                </div>

                <div className = "col-6 col-sm-6">
                    <h1>Our Address</h1>
                    <p>slkdnflksdflksdjflsk lskdfjlsidjfsd lksdfjlskdfj</p>
                </div>
                
                <div className = "col-12 col-sm-3">
                <ul>
                <li> <a href= "#"> FB </a> </li>
                <li> <a href= "#"> Twi </a> </li>
                <li> <a href= "#"> You </a> </li>
                <li> <a href= "#"> Lin </a> </li>
                </ul>
                </div>

            </div>
            
        </div>
    )
}

export default Footer
