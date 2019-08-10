import React from "react"
import "./Navbar.css"

class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar sticky-top navbar-dark">
                <a className="navbar-brand" href="#main_header">Home</a>
                <a className="navbar-brand" href="#menu">Menu</a>
                <a className="navbar-brand" href="#pricing">Pricing</a>
                <a className="navbar-brand" href="#photos">Gallery</a>
                <a className="navbar-brand" href="#contact">Order</a>
                <a className="navbar-brand" href="#delivery">Delivery</a>
            </nav>
        )
    }
}

export default Navbar;