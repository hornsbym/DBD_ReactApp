import React from "react"

class Delivery extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <header>
                        <h2 className="green_text">Delivery</h2>
                    </header>
                </div>
                <div className="row justify-content-center">
                    <p className="info_paragraphs col-md-8">
                        Currently, we are delivering Mondays and Thursdays. Selections from the menu that are marked ‘Monday - Wednesday’
                        will be delivered Monday, and selections marked ‘Thursday - Sunday’ will be delivered Thursday.
                        'Late week orders' may also be placed prior to Tuesday at 9 PM for Thursday delivery.
                    </p>
                </div>
                <div className="row justify-content-center">
                    <p className="info_paragraphs col-md-8">
                        In addition to a number of gyms in the area, we offer a home delivery service with a
                        radius of 5 miles that we are glad to offer clients free of charge. All other deliveries
                        are made at our discretion, and for a small fee of $5 per delivery. Please contact us to
                        determine if you are eligible. Local pickup at our facility in Flowery Branch is always welcome
                        at no cost.
                    </p>
                </div>
            </div>
        )
    }
}

export default Delivery