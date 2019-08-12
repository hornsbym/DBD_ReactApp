import React from 'react'

class SideTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sideItems: []
        }
    }

    componentWillMount() {
        this.getSideItemArray()
    }
        
    getSideItemArray = () => {
        // Sends an API request for the menu to the Node server:
        fetch("/getMenu", {
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        })
        .then( response => {
            // If the response is okay, turns it into JSON:
            if (response.ok) {
                response.json().then(menu =>{
                    // Here's where we can actually interact with the menu data:
                    var sides = menu.sides
                    var array = []

                    for (let side in sides) {

                        array.push(
                            <tr>
                                <td>{sides[side]}</td>
                            </tr>
                        )
                    }
                    
                    this.setState(prevState => ({
                        sideItems: [...prevState.sideItems, array]
                    }))

                })
            }
        })
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th className="table_title">Sides</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.sideItems}
                </tbody>
            </table>
        )
    }
}

export default SideTable