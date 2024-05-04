import React from "react"

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar sticky-top bg-darkBlue ">
                <div className="navbar-collapse">
                    <a className="navbar-brand bg-darkBlue text-white mx-4" href="#app_root">Home</a>
                    <a className="navbar-brand bg-darkBlue text-white mx-4" href="#pricing">Pricing</a>
                    <a className="navbar-brand bg-darkBlue text-white mx-4" href="#photos">Gallery</a>
                    <a className="navbar-brand bg-darkBlue text-white mx-4" href="#delivery">Delivery</a>
                    <a className="navbar-brand bg-darkBlue text-white mx-4" href="#contact">Order</a>
                </div>
            </nav>
        )
    }
}

export default Navbar;