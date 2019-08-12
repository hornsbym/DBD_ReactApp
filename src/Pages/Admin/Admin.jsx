import React from 'react'
import "./Admin.css"

class Admin extends React.Component {
  render() {
    return (
      <div id="admin_root" className="content justify-content-center">
        <div className="container">
          <header>
            <h1>
              Administrator Dashboard
            </h1>
            <h3>Website traffic report</h3>
            <h4>Today:</h4>
            <h4>This week:</h4>
            <h4>All time:</h4>
          </header>
          <table>
            <tr>
              <td>
                <a href="/admin">Update current menu</a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    )
  }
}

export default Admin