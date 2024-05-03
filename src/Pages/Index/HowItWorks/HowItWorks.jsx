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
                                <p>
                                Each Monday we will release a unique menu of healthy, 
                                chef inspired creations to be delivered the following week. 
                                </p>  
                                <p>
                                After signing up at <a href="https://dinnersbyderek.bottle.com/" 
                                target="_blank" rel="noopener noreferrer">dinnersbyderek.bottle.com</a>, 
                                you will be able to view the menu and order for the upcoming week!* No long term commitment necessary!
                                </p>
                                <br />
                                <span className="small_text">*(All orders must be received before 9 PM on Friday of the preceding week,
                                Late week orders' may also be placed prior to Sunday at 9 PM for Thursday delivery.)</span>
                                <br />
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
                                <p>
                                    We will personally deliver your meals twice weekly to maximize on freshness.**
                                </p>
                                <span className="small_text">**(Please contact us concerning our delivery area)</span>
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
                                <p>
                                    We use containers that are best suited to warm your food quickly and
                                    easily. Simply follow the enclosed directions and ring the dinner bell!
                                </p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HowItWorks