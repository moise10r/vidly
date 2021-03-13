import React, { Component } from 'react'
import { Link } from 'react-router-dom'
const SideBar = () => {
  return (
    <ul>
      <li>
        <Link to="/article/articleone">Articles One</Link>
        <Link to="/article/articletwo">Article Two</Link>
      </li>
    </ul>
  )
}

export default SideBar
