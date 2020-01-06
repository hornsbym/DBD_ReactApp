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
            <p className="info_paragraphs">
              Effective January 6th, we will begin offering a quantity discount on our entrees for those looking to jump start their personal health goals for the new year.
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
                  <th>Meal plans of 10+ entrees</th>
                  <td>$8.25 each</td>
                </tr>
                <tr>
                  <th>Meal plans of 14+ entrees</th>
                  <td>$8.00 each</td>
                </tr>
                <tr>
                  <th>Individual salads</th>
                  <td>$3.00 each</td>
                </tr>
                <tr>
                  <th>Salad orders of 5+ salads</th>
                  <td>$2.50 each</td>
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