import React from "react"
import logo from "./logo.png"
import "./Intro.css"

class Intro extends React.Component {
    render() {
        return (
                <div id="intro" className="container">
                    <div className="row justify-content-center">
                        <figure id="intro_fig" class="col-md-5">
                            <img src={logo} className="img-responsive" alt="The Dinners by Derek logo" />
                        </figure>
                    </div>
                    <div className="row justify-content-center">
                        <p className="info_paragraphs col-md-8">
                            Dinners by Derek is a prepared foods service that is designed to simplify
                            mealtime. We offer wholesome, nutritious, and diverse weekly menus that
                            are delivered fresh for your convenience!
                        </p>
                    </div>
                    <div className="row justify-content-center">
                        <p>
                            <a href="https://www.facebook.com/ChefDerekDouglas/">Check us out on Facebook here!</a>
                        </p>
                    </div>
                </div>
        )
    }
}

export default Intro