import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import SecondArticle from './secondArticle'
import FirstArticle from './artilceOne'
import SideBar from './sidebar'
class Articles extends Component {
  handleRedirect = () => {
    this.props.history.replace('/')
  }
  render() {
    return (
      <div>
        <h2>Articles</h2>
        <SideBar />
        <Route path="/article/articleone" component={FirstArticle} />
        <Route path="/article/articletwo" component={SecondArticle} />
        <button onClick={this.handleRedirect}>Register</button>
      </div>
    )
  }
}

export default Articles
