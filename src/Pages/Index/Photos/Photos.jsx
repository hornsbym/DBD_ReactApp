import React from 'react'

import photo1 from "./img/20190225_213325.jpg"
import photo2 from "./img/20190313_235159.jpg"

import photo3 from "./img/20190318_015334.jpg"
import photo4 from "./img/20190322_001013.jpg"
import photo5 from "./img/20190325_030911.jpg"
import photo6 from "./img/20190328_012841.jpg"

class Photos extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <header>
                        <h2><span className="green_text">Photo Gallery</span></h2>
                    </header>
                </div>
                <div className="row">
                    <figure className="col-md-6">
                        <img src={photo1} alt="" />
                    </figure>
                    <figure class="col-md-6">
                        <img src={photo2} alt="" />
                    </figure>
                </div>
                <div className="row">
                    <figure className="col-md-6">
                        <img src={photo3} alt="" />
                    </figure>
                    <figure class="col-md-6">
                        <img src={photo4} alt="" />
                    </figure>
                </div>
                <div className="row">
                    <figure className="col-md-6">
                        <img src={photo5} alt="" />
                    </figure>
                    <figure class="col-md-6">
                        <img src={photo6} alt="" />
                    </figure>
                </div>
            </div>
        )
    }
}

export default Photos