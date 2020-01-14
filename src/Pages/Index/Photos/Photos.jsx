import React from 'react'
import { Carousel } from 'react-bootstrap'

import photo1 from "./img/20190225_213325.jpg"
import photo2 from "./img/20190313_235159.jpg"

import photo3 from "./img/20190318_015334.jpg"
import photo4 from "./img/20190322_001013.jpg"
import photo5 from "./img/20190325_030911.jpg"
import photo6 from "./img/20190328_012841.jpg"

class Photos extends React.Component {
    render() {
        return (
            <div id="photos" className="container">
                <div className="row justify-content-center">
                    <header>
                        <h2><span className="green_text">Photos</span></h2>
                    </header>
                </div>
                <Carousel>
                    <Carousel.Item>
                        <img src={photo1} className="d-block w-100" alt=""/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={photo2} className="d-block w-100" alt=""/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={photo3} className="d-block w-100" alt=""/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={photo4} className="d-block w-100" alt=""/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={photo5} className="d-block w-100" alt=""/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={photo6} className="d-block w-100" alt=""/>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default Photos