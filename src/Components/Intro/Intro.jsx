import React from "react"

class Intro extends React.Component {
    render() {
        return (
            <header id="main_header">
                <figure id="intro_fig">
                    <img src="" alt="The Dinners by Derek logo" />
                </figure>
                <div class="info_paragraphs">
                    <p>Dinners by Derek is a prepared foods service that is designed to simplify
                        mealtime. We offer wholesome, nutritious, and diverse weekly menus that 
                        are delivered fresh for your convenience!</p>
                    <p><a id="facebook" href="https://www.facebook.com/ChefDerekDouglas/">Check us out on Facebook here!</a></p>
                </div>
            </header>
        )
    }
}

export default Intro