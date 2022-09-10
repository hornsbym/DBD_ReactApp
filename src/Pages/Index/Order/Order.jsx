import React from 'react'

class Order extends React.Component {
    render() {
        return (
            <div id="contact" className="container">
                <div className="row justify-content-center">
                    <header>
                        <h2>
                            <span className="blue_text">Order</span>
                        </h2>
                    </header>
                </div>
                <div className="row justify-content-center">
                    <p className="info_paragraphs col-md-8">
                    To place an order, please visit our order page at <a href="https://www.sendbottles.com/dinnersbyderek">sendbottles.com/dinnersbyderek</a></p>
                </div>
                {/* <div className="row justify-content-center">
                    <div className="table-responsive col-md-4">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>
                                        <span className="blue_text">Email</span>
                                    </th>
                                    <td>dinnersbyderek@gmail.com</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default Order;