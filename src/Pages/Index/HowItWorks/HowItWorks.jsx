import React from "react"
import "./HowItWorks.css"

class HowItWorks extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="card-deck">
                    <div className="card">
                        <div className="card-body">
                            <div className="row justify-content-center">
                                <p className="card-title">1</p>
                            </div>
                            <p className="card-text">
                                <strong>Make your selections</strong>
                                <br />
                                Each Monday we will release a unique menu of classic entrees and
                                chef inspired creations to be delivered the following week. Choose which meals you’d like to
                                enjoy, as well as how many portions of each offering.
                                <br />
                                <span className="small_text">* No long term commitment necessary!</span>
                                <br />
                                <span class="small_text">* All orders must be received before 9 PM on Friday of the preceding week</span>
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="row justify-content-center">
                                <p className="card-title">2</p>
                            </div>
                            <p className="card-text">
                                <strong>Receive your food</strong>
                                <br />
                                We will personally deliver your meals twice weekly to maximize on freshness.
                                <br />
                                <span class="small_text">** We’ll accept payment for the week upon delivery.</span>
                                <br />
                                <span class="small_text">** Please contact us concerning our delivery area</span>
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body ">
                            <div className="row justify-content-center">
                                <p className="card-title">3</p>
                            </div>
                            <p className="card-text">
                                <strong>Heat and enjoy!</strong>
                                <br />
                                We use containers that are best suited to warm your food quickly and
                                easily. Simply follow the enclosed directions and ring the dinner bell!
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default HowItWorks