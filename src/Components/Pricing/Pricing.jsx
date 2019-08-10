import React from "react"

class Pricing extends React.Component {
    render() {
        return(
            <section id="pricing">
            <header>
              <h2><span class="greenText">Pricing</span></h2>
            </header>
            <div class="info_paragraphs">
              <p>
                Our meals are prepared with value in mind. Each portion will suit a standard adult
                appetite… no microportioning! Please see our pricing guide below. (Tax is included)
              </p>
            </div>
            <table>
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
                <tr>
                  <th>Desserts</th>
                  <td>$1.25</td>
                </tr>
              </tbody>
            </table>
          </section>
        )
    }
}

export default Pricing;