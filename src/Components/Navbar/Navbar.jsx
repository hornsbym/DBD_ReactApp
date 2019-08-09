import React from "react"

class Navbar extends React.Component {
    render() {
        return(
            <nav>
                <a href="#main_header">Home</a>
                <a href="#menu">Menu</a>
                <a href="#health">Bodyplex/Burn Boot Camp</a>
                <a href="#pricing">Pricing</a>
                <a href="#photos">Gallery</a>
                <a href="#contact">Order</a>
            </nav>
        )
    }
}

export default Navbar;