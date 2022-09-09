import React from "react"

class Delivery extends React.Component {
    render() {
        return (
            <div id="delivery" className="container">
                <div className="row justify-content-center">
                    <header>
                        <h2 className="blue_text">Delivery</h2>
                    </header>
                </div>
                <div className="row justify-content-center">
                    <p className="info_paragraphs col-md-8">
                        Currently, we are delivering Mondays for options 1-3 and Thursdays for options 4-7.
                    </p>
                </div>
                <div className="row justify-content-center">
                    <p className="info_paragraphs col-md-8">
                        In addition to a number of gyms in the area, we offer a home delivery service with an approximate 
                        radius of 5 miles that we are glad to offer clients free of charge with a $40 minimum order per week. 
                        If you'd still care for delivery but don't meet the minimum, we will politely assess a $5.00 fee (excludes gym and school delivery). 
                        Local pickup at our facility in Flowery Branch is always welcome at no cost.
                    </p>
                    <p className="info_paragraphs col-md-8">
                        Please visit our order page at <a href="https://sendbottles.com/dinnersbyderek" 
                        target="_blank" rel="noopener noreferrer">sendbottles.com/dinnersbyderek</a>.
                    </p>
                </div>
            </div>
        )
    }
}

export default Delivery