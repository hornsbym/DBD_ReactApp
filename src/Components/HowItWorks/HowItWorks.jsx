import React from "react"

class HowItWorks extends React.Component {
    render() {
        return(
            <div id="how_it_works_section">
            <div class="instruction_card inlineContainer">
                <div class="number_title">1</div>
                <div class="instruction_header"><strong>Make your selections</strong></div>
                <div class="instruction_info">
                    <p>Each Monday we will release a unique menu of classic entrees and
                        chef inspired creations to be delivered the following week. Choose which meals you’d like to
                        enjoy, as well as how many portions of each offering.* No long term commitment necessary!</p>
                    <p><span class="smallText">* All orders must be received before midnight on Friday of the preceding
                            week</span></p>
                </div>
            </div>
            <div class="instruction_card inlineContainer">
                <div class="number_title">2</div>
                <div class="instruction_header"><strong>Receive your food</strong></div>
                <div class="instruction_info">
                    <p> We will personally deliver your meals on a schedule to suit you and
                        to maximize on freshness.** We’ll accept payment for the week upon delivery.</p>
                    <p><span class="smallText">** Please contact us concerning our delivery area</span></p>
                </div>
            </div>
            <div class="instruction_card inlineContainer">
                <div class="number_title">3</div>
                <div class="instruction_header"><strong>Heat and enjoy!</strong></div>
                <div class="instruction_info">
                    <p> We use containers that are best suited to warm your food quickly and
                        easily. Simply follow the enclosed directions and ring the dinner bell!</p>
                </div>
            </div>
        </div>
        )
    }
}

export default HowItWorks