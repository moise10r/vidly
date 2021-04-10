import React, { Component } from 'react'
import Joi from 'joi-browser'
import Input from './input'
import Select from './select'
class Form extends Component {
  state = {
    data: {},
    errors: {},
  }
  validate = () => {
    const option = {
      abortEarly: false,
    }
    const { error } = Joi.validate(this.state.data, this.schema, option)
    if (!error) return null
    const errors = {}
    for (let item of error.details) errors[item.path[0]] = item.message
    return errors
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const errors = this.validate()
    this.setState({
      errors: errors || {},
    })
    if (errors) {
      return
    }
    this.onSubmit()
  }

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value }
    const schema = { [name]: this.schema[name] }
    const { error } = Joi.validate(obj, schema)
    return !error ? null : error.details[0].message
  }
  handleOnchange = ({ target: input }) => {
    const data = { ...this.state.data }
    data[input.name] = input.value
    const errors = { ...this.state.errors }
    const errorMessage = this.validateProperty(input)
    if (errorMessage) errors[input.name] = errorMessage
    else delete errors[input.name]
    this.setState({
      data,
      errors,
    })
  }
  renderButton = (label) => {
    return (
      <button
        disabled={this.validate()}
        type="submit"
        className="btn btn-primary"
      >
        {label}
      </button>
    )
  }
  renderInput = (name, label, type = 'text') => {
    const { data } = this.state
    return (
      <Input
        name={name}
        label={label}
        onChange={this.handleOnchange}
        value={data[name]}
        type={type}
        errors={this.state.errors[name]}
      />
    )
  }
  renderSelect = (name, label, options) => {
    const { data } = this.state
    return (
      <Select
        name={name}
        label={label}
        errors={this.state.errors[name]}
        value={data[name]}
        options={options}
        onChange={this.handleOnchange}
      />
    )
  }
}

export default Form
