import React from "react"

class Update extends React.Component {
    render() {
        return (
            <div className="container-fluid justify-content-center">
                <div className="container">
                    <form action="/submitChanges" method="POST">
                        <div className="form-group">
                            <label for="date">Displayed date </label>
                            <input className="form-control" id="date" name="date" type="date" />
                        </div>
                        <div className="form-group">
                            <label for="monday">Monday</label>
                            <input className="form-control" name="monday" id="monday" type="text" />
                        </div>
                        <div className="form-group">
                            <label for="tuesday">Tuesday</label>
                            <input className="form-control" name="tuesday" id="tuesday" type="text" />
                        </div>
                        <div className="form-group">
                            <label for="wednesday">Wednesday</label>
                            <input className="form-control" name="wednesday" id="wednesday" type="text" />
                        </div>
                        <div className="form-group">
                            <label for="thursday">Thursday</label>
                            <input className="form-control" name="thursday" id="thursday" type="text" />
                        </div>
                        <div className="form-group">
                            <label for="friday">Friday</label>
                            <input className="form-control" name="friday" id="friday" type="text" />
                        </div>
                        <div className="form-group">
                            <label for="saturday">Saturday</label>
                            <input className="form-control" name="saturday" id="saturday" type="text" />
                        </div>
                        <div className="form-group">
                            <label for="sunday">Sunday</label>
                            <input className="form-control" name="sunday" id="sunday" type="text" />
                        </div>
                        <div className="form-group">
                            <label for="sideOne">Side 1</label>
                            <input className="form-control" name="sideOne" id="sideOne" type="text" />
                        </div>
                        <div className="form-group">
                            <label for="sideTwo">Side 2</label>
                            <input className="form-control" name="sideTwo" id="sideTwo" type="text" />
                        </div>
                        <div className="form-group">
                            <label for="sideThree">Side 3</label>
                            <input className="form-control" name="sideThree" id="sideThree" type="text" />
                        </div>
                        <div>
                            <input type="submit" />
                        </div>
                    </form>
                </div>
            </div>



        /* <table>
                    <table>
                        <tr>
                            <th class="topHeading"></th>
                            <th class="topHeading">Meal</th>
                            <th class="topHeading">Keto?</th>
                            <th class="topHeading">Paleo?</th>
                            <th class="topHeading">GF?</th>
                            <th class="topHeading">Fat</th>
                            <th class="topHeading">Protein</th>
                            <th class="topHeading">Carbs</th>
                            <th class="topHeading">Calories</th>
                        </tr>
                        <tr>
                            <th>Healthy Item 1</th>
                            <td>
                                <input name="healthy_item_one_meal" type="text" value="Spanish “Arroz Moreno Con Pollo” w/ Saffron and Green Peas"/>
                            </td>
                            <td>
                                <input name="healthy_item_one_keto" type="checkbox"/>
                            </td>
                            <td>
                                <input name="healthy_item_one_paleo" type="checkbox"/>
                            </td>
                            <td>
                                <input name="healthy_item_one_gf" type="checkbox" checked="checked"/>
                            </td>
                            <td>
                                <input name="healthy_item_one_fat" type="number" value="5"/>
                            </td>
                            <td>
                                <input name="healthy_item_one_protein" type="number" value="38"/>
                            </td>
                            <td>
                                <input name="healthy_item_one_carbs" type="number" value="22"/>
                            </td>
                            <td>
                                <input name="healthy_item_one_calories" type="number" value="325"/>
                            </td>
                        </tr>
                        <tr>
                            <th>Healthy Item 2</th>
                            <td>
                                <input name="healthy_item_two_meal" type="text" value="Roasted Cod and Heirloom Cauliflower w/ Golden Raisin, and Israeli Couscous"/>
                            </td>
                            <td>
                                <input name="healthy_item_two_keto" type="checkbox"/>
                            </td>
                            <td>
                                <input name="healthy_item_two_paleo" type="checkbox"/>
                            </td>
                            <td>
                                <input name="healthy_item_two_gf" type="checkbox"/>
                            </td>
                            <td>
                                <input name="healthy_item_two_fat" type="number" value="6"/>
                            </td>
                            <td>
                                <input name="healthy_item_two_protein" type="number" value="42"/>
                            </td>
                            <td>
                                <input name="healthy_item_two_carbs" type="number" value="22"/>
                            </td>
                            <td>
                                <input name="healthy_item_two_calories" type="number" value="345"/>
                            </td>
                        </tr>
                        <tr>
                            <th>Healthy Item 3</th>
                            <td>
                                <input name="healthy_item_three_meal" type="text" value="“Hot Mess” Sweet Potato w/ Barbacoa, Jack Cheese, and Chipotle Cream"/>
                            </td>
                            <td>
                                <input name="healthy_item_three_keto" type="checkbox"/>
                            </td>
                            <td>
                                <input name="healthy_item_three_paleo" type="checkbox"/>
                            </td>
                            <td>
                                <input name="healthy_item_three_gf" type="checkbox" checked="checked"/>
                            </td>
                            <td>
                                <input name="healthy_item_three_fat" type="number" value="13"/>
                            </td>
                            <td>
                                <input name="healthy_item_three_protein" type="number" value="40"/>
                            </td>
                            <td>
                                <input name="healthy_item_three_carbs" type="number" value="24"/>
                            </td>
                            <td>
                                <input name="healthy_item_three_calories" type="number" value="365"/>
                            </td>
                        </tr>
                        <tr>
                            <th>Healthy Item 4</th>
                            <td>
                                <input name="healthy_item_four_meal" type="text" value="Bacon-Wrapped Apricot Glazed Pork w/ Green Beans and Carrots"/>
                            </td>
                            <td>
                                <input name="healthy_item_four_keto" type="checkbox"/>
                            </td>
                            <td>
                                <input name="healthy_item_four_paleo" type="checkbox"/>
                            </td>
                            <td>
                                <input name="healthy_item_four_gf" type="checkbox" checked="checked"/>
                            </td>
                            <td>
                                <input name="healthy_item_four_fat" type="number" value="13"/>
                            </td>
                            <td>
                                <input name="healthy_item_four_protein" type="number" value="38"/>
                            </td>
                            <td>
                                <input name="healthy_item_four_carbs" type="number" value="10"/>
                            </td>
                            <td>
                                <input name="healthy_item_four_calories" type="number" value="325"/>
                            </td>
                        </tr>
                        <tr>
                            <th>Healthy Item 5</th>
                            <td>
                                <input name="healthy_item_five_meal" type="text" value="Chicken Teriyaki w/ Hibachi Vegetables and Brown Rice"/>
                            </td>
                            <td>
                                <input name="healthy_item_five_keto" type="checkbox"/>
                            </td>
                            <td>
                                <input name="healthy_item_five_paleo" type="checkbox"/>
                            </td>
                            <td>
                                <input name="healthy_item_five_gf" type="checkbox"/>
                            </td>
                            <td>
                                <input name="healthy_item_five_fat" type="number" value="5"/>
                            </td>
                            <td>
                                <input name="healthy_item_five_protein" type="number" value="38"/>
                            </td>
                            <td>
                                <input name="healthy_item_five_carbs" type="number" value="22"/>
                            </td>
                            <td>
                                <input name="healthy_item_five_calories" type="number" value="305"/>
                            </td>
                        </tr>
                    </table>
                    <input type="submit"/>
                </table> */

        )
    }
}

export default Update