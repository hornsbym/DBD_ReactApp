import React from "react"
import "./Navbar.css"

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar sticky-top navbar-dark">
                <div className="navbar-collapse">
                    <a className="navbar-brand mx-4" href="#app_root">Home</a>
                    <a className="navbar-brand mx-4" href="#menu">Menu</a>
                    <a className="navbar-brand mx-4" href="#pricing">Pricing</a>
                    <a className="navbar-brand mx-4" href="#photos">Gallery</a>
                    <a className="navbar-brand mx-4" href="#contact">Order</a>
                    <a className="navbar-brand mx-4" href="#delivery">Delivery</a>
                </div>
            </nav>
        )
    }
}

export default Navbar;