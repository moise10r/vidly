import React, { Component } from 'react'
import Joi from 'joi-browser'
import Form from './common/form'
class Login extends Form {
  state = {
    data: {
      username: '',
      password: '',
    },
    errors: {},
    isSubmitted: false,
  }

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password'),
  }
  onSubmit = () => {
    console.log('submitted')
  }
  render() {
    return (
      <div style={{ width: '30%', margin: '50px auto' }}>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderButton('Login')}
        </form>
      </div>
    )
  }
}

export default Login
