import React from "react"
import MenuTable from "./MenuTable"
import SideTable from "./SideTable"
import "./MenuSection.css"

class MenuSection extends React.Component {
    render() {
        return (
            <div id="health" className="container">
                <header>
                    <div class="row justify-content-center">
                        <h2><span class="green_text">Healthy Selections</span></h2>
                    </div>
                    <div class="row justify-content-center">
                        <div class="info_paragraphs col-md-8">
                            <p>
                                In addition to our regular daily delivery menu, we are pleased to offer a "healthy selections" menu
                                specifically formulated for our Bodyplex, Burn Boot Camp, and Fit Body Boot Camp customers. This menu follows a similar
                                flavor profile to our "balanced selections" menu while keeping calories and portion control in mind.
                                This menu also follows our Friday order cut-off but is delivered on Monday each week.
                            </p>
                        </div>
                    </div>
                </header>
                <MenuTable></MenuTable>
                <SideTable></SideTable>
                <div className="row justify-content-center">
                    <div className="info_paragraphs col-md-8 ">
                        <p>
                            We know the little ones don’t have quite the same appetite…
                            We’re proud to offer a variety of children's entrees that are available each day
                            regardless of our rotating menu. These options include:
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <table className="table col-md-4 text-center">
                        <tbody>
                            <tr>
                                <td>Chicken Tenders</td>
                            </tr>
                            <tr>
                                <td>Macaroni and Cheese</td>
                            </tr>
                            <tr>
                                <td>Spaghetti and Meatballs</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row justify-content-center">
                    <p>
                        <td><span class="small_text">* All children's entrees are served with seasonal fruit</span></td>
                    </p>
                </div>
            </div>
        )
    }
}

export default MenuSection