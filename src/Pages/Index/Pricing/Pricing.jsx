import React from "react"
import "./Pricing.css"

class Pricing extends React.Component {
  render() {
    return (
      <div id="pricing" className="container">
        <div className="row justify-content-center">
          <header>
            <h2><span className="green_text">Pricing</span></h2>
          </header>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <p className="info_paragraphs">
              Our meals are prepared with value in mind. Each portion will suit a standard adult
              appetite… no microportioning! Please see our pricing guide below. (Tax is included)
              </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="table-responsive col-md-4">
            <table className="table">
              <tbody>
                <tr>
                  <th>Adult's Entrees</th>
                  <td>$8.25</td>
                </tr>
                <tr>
                  <th>Kid's Meals</th>
                  <td>$4.00</td>
                </tr>
                <tr>
                  <th>Side Items</th>
                  <td>$2.50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Pricing;