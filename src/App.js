import Main from './components/main'
import './assets/main.css'
import { Route, Redirect, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/navBar'
import React,{Component} from 'react'
import Articles from './components/articles'
import NotFound from './components/notfound'
import Login from './components/login'
import Register from './components/register';
import FormMovie from './components/formMovie';
import NewMovie from './components/newMovie'

class App extends Component{
  render(){

    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/movies/:id" component={FormMovie} />
          <Route path="/movie/new" component={NewMovie} />
          <Route path="/movies" component={Main} />
          <Route  path="/movie/new" component={FormMovie} />
          <Route path="/login" component={Login } />
          <Route path="/register" component={Register } />
          <Route path="/articles" component={Articles} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    )
  }
}

export default App
