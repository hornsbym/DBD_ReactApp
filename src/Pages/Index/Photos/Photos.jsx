import React from 'react'
import { Carousel } from 'react-bootstrap'

import photo1 from "./img/IMG-4766.JPG"
import photo2 from "./img/IMG-4767.JPG"
import photo3 from "./img/IMG-4768.JPG"
import photo4 from "./img/IMG-4769.JPG"
import photo5 from "./img/IMG-4770.JPG"
import photo6 from "./img/IMG-4771.JPG"
import photo7 from "./img/IMG-4772.JPG"
import photo8 from "./img/IMG-4773.JPG"
import photo9 from "./img/IMG-4774.JPG"
import photo10 from "./img/IMG-4775.JPG"
import photo11 from "./img/IMG-4776.JPG"
import photo12 from "./img/IMG-4777.JPG"


class Photos extends React.Component {
    render() {
        return (
            <div id="photos" className="container">
                <div className="row justify-content-center">
                    <header>
                        <h2><span className="blue_text">Photos</span></h2>
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
                    <Carousel.Item>
                        <img src={photo7} className="d-block w-100" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={photo8} className="d-block w-100" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={photo9} className="d-block w-100" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={photo10} className="d-block w-100" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={photo11} className="d-block w-100" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={photo12} className="d-block w-100" alt="" />
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default Photos