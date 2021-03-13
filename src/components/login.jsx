import React, { Component } from 'react'

class Login extends Component {
  state = {}
  handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitted')
  }
  render() {
    return (
      <div style={{ width: '30%', margin: '50px auto' }}>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default Login
