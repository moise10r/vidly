import React, { Component } from 'react'
import Form from './common/form'
import Joi from 'joi-browser'
class Register extends Form {
  state = {
    data: {
      username: '',
      password: '',
      name: '',
    },
    errors: {},
  }

  schema = {
    username: Joi.string().required().email().label('Username'),
    password: Joi.string().required().min(5).label('Password'),
    name: Joi.string().required().label('Name'),
  }
  onSubmit = () => {
    console.log('user registereed')
  }
  render() {
    return (
      <div style={{ width: '30%', margin: '50px auto' }}>
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderInput('name', 'Name')}
          {this.renderButton('Register')}
        </form>
      </div>
    )
  }
}

export default Register
