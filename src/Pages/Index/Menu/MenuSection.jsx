import React from "react"
import MenuTable from "./MenuTable"
import "./MenuSection.css"

class MenuSection extends React.Component {
    constructor() {
        super()
        this.state = {
            week: null,
            weekString: ""
        }
    }

    componentWillMount() {
        this.getWeek()
    }

    makeWeekString = () => {
        var dateObj = new Date(this.state.week)
        
        var months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

        var date = dateObj.getDate() + 1
        var month = dateObj.getMonth()

        console.log("date:", date, "month:", month)

        this.setState({weekString: months[month] +  " " + date.toString()}) 
    }

    getWeek = () => {
        fetch("/getDate").then(dateResponse => {
            dateResponse.json().then(date => {
                this.setState({ 
                    week: date.date
                })

                this.makeWeekString()
            })
        })
    }

    render() {
        return (
            <div id="menu" className="container">
                <header>
                    <div className="row justify-content-center">
                        <h2><span className="blue_text">{`Menu for week of ${this.state.weekString}`}</span></h2>
                    </div>
                </header>
                <div className="row justify-content-center">
                    <h4>Entrees</h4>
                </div>
                <div className="row justify-content-center">
                    <MenuTable></MenuTable>
                </div>
                <div className="row justify-content-center">
                    <h4>Salads</h4>
                </div>
                <div className="row justify-content-center">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <td className="table_title"></td>
                                    <td className="table_title">Gluten free</td>
                                    <td className="table_title">Fat</td>
                                    <td className="table_title">Carbs</td>
                                    <td className="table_title">Protein</td>
                                    <td className="table_title">Calories</td>
                                    <td className="table_title">Price</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Kale Salad with Cranberry and Almond</td>
                                    <td>Yes</td>
                                    <td>10</td>
                                    <td>8</td>
                                    <td>8</td>
                                    <td>200</td>
                                    <td>$4</td>
                                </tr>
                                <tr>
                                    <td>Garden Salad with Apple Cider Vinaigrette</td>
                                    <td>Yes</td>
                                    <td>4</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>50</td>
                                    <td>$3</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <h4>Snacks</h4>
                </div>
                <div className="row justify-content-center">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <td className="table_title"></td>
                                    <td className="table_title">Gluten free</td>
                                    <td className="table_title">Fat</td>
                                    <td className="table_title">Carbs</td>
                                    <td className="table_title">Protein</td>
                                    <td className="table_title">Calories</td>
                                    <td className="table_title">Price</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Chickpea Hummus with Crudite</td>
                                    <td>No</td>
                                    <td>30</td>
                                    <td>20</td>
                                    <td>8</td>
                                    <td>350</td>
                                    <td>$4</td>
                                </tr>
                                <tr>
                                    <td>Yogurt Parfait with Fresh Fruit and Granola</td>
                                    <td>No</td>
                                    <td>6</td>
                                    <td>63</td>
                                    <td>18</td>
                                    <td>365</td>
                                    <td>$4</td>
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
                                <tr>
                                    <td>Kid's Menu</td>                                
                                </tr>
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
                            <span className="small_text">* All children's entrees are served with seasonal fruit</span>
                        </p>
                </div>
            </div>
        )
    }
}

export default MenuSection