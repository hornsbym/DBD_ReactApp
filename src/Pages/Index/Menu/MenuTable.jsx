import React from 'react'

function capitalize(string) {
    var returnString = string.split("")
    var capitalLetter = returnString[0].toUpperCase()

    returnString[0] = capitalLetter

    return returnString.join("")
}


class MenuTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuItems: []
        }
    }

    componentWillMount() {
        this.getMenuItemArray()
    }

    getMenuItemArray = () => {
        // Sends an API request for the menu to the Node server:
        fetch("/getMenu", {
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        })
            .then(response => {
                // If the response is okay, turns it into JSON:
                if (response.ok) {
                    response.json().then(menu => {
                        // Here's where we can actually interact with the menu data:
                        var jsonKeys = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
                        var array = []

                        var menu = menu.entrees
                        var sides = menu.sides
                        var key;

                        for (key in jsonKeys) {
                            var day = jsonKeys[key]

                            var menuItem = menu[day]

                            day = capitalize(day)
                            var entree = menuItem.meal
                            var protein = menuItem.protein
                            var carbs = menuItem.carbs
                            var fats = menuItem.fats
                            var calories = menuItem.calories
                            var gf = "No"

                            if (menuItem.gf == true) {
                                gf = "Yes"
                            }

                            array.push(
                                <tr>
                                    <td>{day}</td>
                                    <td>{entree}</td>
                                    <td>{gf}</td>
                                    <td>{fats}</td>
                                    <td>{carbs}</td>
                                    <td>{protein}</td>
                                    <td>{calories}</td>
                                </tr>
                            )
                        }

                        this.setState(prevState => ({
                            menuItems: [...prevState.menuItems, array]
                        }))

                    })
                }
            })
    }

    render() {
        return (
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="table_title">Day</th>
                            <th className="table_title">Meal</th>
                            <th className="table_title">Gluten free?</th>
                            <th className="table_title">Fat</th>
                            <th className="table_title">Carbs</th>
                            <th className="table_title">Protein</th>
                            <th className="table_title">Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.menuItems}
                    </tbody>
                </table>
            </div>

        )
    }
}

export default MenuTable