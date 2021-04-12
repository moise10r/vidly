import React, { Component } from 'react'

const SearchInput = ({ value, onChange }) => {
  return (
    <input
      name="query"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="form-control my-3"
      placeholder="Search ..."
      type="text"
    />
  )
}

export default SearchInput
