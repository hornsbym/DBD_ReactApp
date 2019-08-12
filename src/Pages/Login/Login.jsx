import React from 'react'
import "./Login.css"

class Login extends React.Component {
  render() {
    return (
      <div id="login_root" className="justify-content-center">
        <div className="container col-md-6" id="login_container">
          <div className="row col-md-12">
            <h1>Login</h1>
          </div>
          <div className="row col-md-12">
            <h3>Please enter username and password below</h3>
          </div>
          <div id="errorMessage">
          </div>
          <form method="POST" action="/verifyUser">
            <div className="form-group">
              <label for="username">Username</label>
              <input className="form-control" name="username" type="text"/>
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input className="form-control" name="password" type="password"/>
            </div>
            <input  className="form-control" type="submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default Login