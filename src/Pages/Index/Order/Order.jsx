import React from 'react'

class Order extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <header>
                        <h2>
                            <span className="green_text">Order</span>
                        </h2>
                    </header>
                </div>

                <div class="row justify-content-center">
                    <p className="info_paragraphs col-md-8">
                        General inquiries are welcome anytime! We're happy to talk about our food and service day or night.
                    </p>
                </div>
                <div class="row justify-content-center">

                    <p className="info_paragraphs col-md-8">
                        To place an order via text or email, simply let us know which entrees you'd care to enjoy and the
                        quantity of each. We will reach out to you at our earliest convenience to confirm and establish a
                        delivery location as well as a payment method.</p>
                </div>
                <div class="row justify-content-center">
                    <table className="table col-md-6">
                        <tbody>
                            <tr>
                                <th>
                                    <span class="greenText">Phone</span>
                                </th>
                                <td>(630)313-9576</td>
                            </tr>
                            <tr>
                                <th>
                                    <span class="greenText">Email</span>
                                </th>
                                <td>dinnersbyderek@gmail.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Order;