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
                        Currently, we are delivering meals Mondays and Thursdays.
                    </p>
                </div>
                <div className="row justify-content-center">
                    <p className="info_paragraphs col-md-8">
                    In addition to a number of gyms offering community pick up, we offer a home delivery service within a select area that is free of charge with a $50 minimum order per week. If you'd still care for delivery but don't meet the minimum, we will politely assess a $5.00 fee (excludes gym and school delivery). We are not offering pick up from our facility at this time.
                    </p>
                </div>
            </div>
        )
    }
}

export default Delivery