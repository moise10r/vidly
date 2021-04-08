import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import SecondArticle from './secondArticle'
import FirstArticle from './artilceOne'
import SideBar from './sidebar'
class Articles extends Component {
  render() {
    return (
      <div>
        <h2>Articles</h2>
        <SideBar />
        <Switch>
          <Route path="/article/articleone" component={FirstArticle} />
          <Route path="/article/articletwo" component={SecondArticle} />
        </Switch>
        <button onClick={this.props.onhandleRedirect}>Register</button>
      </div>
    )
  }
}

export default Articles
