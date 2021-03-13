import Main from './components/main'
import './assets/main.css'
import { Route, Redirect, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/navBar'
import React from 'react'
import Articles from './components/articles'
import NotFound from './components/notfound'
import Login from './components/login'

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/movies" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/articles" component={Articles} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/movies" />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  )
}

export default App
