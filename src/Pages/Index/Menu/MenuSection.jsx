import React from "react"
import MenuTable from "./MenuTable"
import SideTable from "./SideTable"
import "./MenuSection.css"

class MenuSection extends React.Component {
    render() {
        return (
            <div id="menu" className="container">
                <header>
                    <div className="row justify-content-center">
                        <h2><span className="green_text">Menu</span></h2>
                    </div>
                </header>
                <div className="row justify-content-center">
                    <h4>Entrees</h4>
                </div>
                <div className="row justify-content-center">
                    <MenuTable></MenuTable>
                </div>
                <div className="row justify-content-center">
                    <h4>Sides</h4>
                </div>
                <div className="row justify-content-center">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="table_title">Side</th>
                                    <th className="table_title">Gluten free?</th>
                                    <th className="table_title">Fat</th>
                                    <th className="table_title">Carbs</th>
                                    <th className="table_title">Protein</th>
                                    <th className="table_title">Calories</th>
                                </tr>                        </thead>
                            <tbody>
                                <tr>
                                    <td>Garden salad</td>
                                    <td>Yes</td>
                                    <td>4</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>50</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
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
                    <div className="table-responsive col-md-4">
                        <table className="table">
                            <thead>
                                <th>Kid's Menu</th>
                            </thead>
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