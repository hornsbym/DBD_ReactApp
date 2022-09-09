import React from "react"
import "./Pricing.css"

class Pricing extends React.Component {
  render() {
    return (
      <div id="pricing" className="container">
        <div className="row justify-content-center">
          <header>
            <h2><span className="blue_text">Pricing</span></h2>
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
                  <th>Individual entrees</th>
                  <td>$8.50 each</td>
                </tr>
                <tr>
                  <th>Individual salads</th>
                  <td>$3 - $4.00 each</td>
                </tr>
                <tr>
                  <th>Kid's meals</th>
                  <td>$5.00 each</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <p className="info_paragraphs">
              Orders over $100 may use coupon code BULK5 to receive 5% off!  
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Pricing;