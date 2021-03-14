import React, { Component } from 'react'
const Input = ({ name, label, value, onChange, errors }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus
        onChange={onChange}
        value={value}
        type="text"
        name={name}
        id={name}
        className="form-control"
      />
      {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
  )
}

export default Input
