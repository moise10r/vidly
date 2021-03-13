import React, { Component } from 'react'

class Login extends Component {
  state = {
    account: {
      username: '',
      password: '',
    },
  }
  username = React.createRef()

  handleSubmit = (e) => {
    e.preventDefault()
    const username = this.username.current.value
    console.log('submitted')
  }
  handleOnchange = ({ target: input }) => {
    const account = { ...this.state.account }
    account[input.name] = input.value
    this.setState({
      account,
    })
    console.log()
  }
  render() {
    const { account } = this.state
    return (
      <div style={{ width: '30%', margin: '50px auto' }}>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              autoFocus
              ref={this.username}
              onChange={this.handleOnchange}
              value={account.username}
              type="text"
              name="username"
              id="username"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={this.handleOnchange}
              value={account.password}
              name="password"
              type="password"
              id="password"
              className="form-control"
            />
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
