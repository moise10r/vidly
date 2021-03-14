import React, { Component } from 'react'
import Input from './common/input'

class Login extends Component {
  state = {
    account: {
      username: '',
      password: '',
    },
    errors: {},
  }

  validate = () => {
    const errors = {}
    const { account } = this.state
    if (account.username.trim() === '') errors.username = 'username is required'
    if (account.password.trim() === '') errors.password = 'password is required'
    return Object.keys(errors).length === 0 ? null : errors
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const errors = this.validate()
    // if (errors) return
    this.setState({ errors: errors || {} })
    if (errors) {
      return
    }
    console.log('submitted')
  }
  handleOnchange = ({ target: input }) => {
    const account = { ...this.state.account }
    account[input.name] = input.value
    this.setState({
      account,
    })
  }
  render() {
    const { account } = this.state
    return (
      <div style={{ width: '30%', margin: '50px auto' }}>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            onChange={this.handleOnchange}
            value={account.username}
            errors={this.state.errors.username}
          />
          <Input
            name="password"
            label="Password"
            onChange={this.handleOnchange}
            value={account.password}
            errors={this.state.errors.password}
          />

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default Login
