import Main from './components/main'
import './assets/main.css'
import { Route, Redirect, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/navBar'
import React,{Component} from 'react'
import Articles from './components/articles'
import NotFound from './components/notfound'
import Login from './components/login'

class App extends Component{
  handleRedirect = () => {
    this.props.history.push('/')
  }
  render(){

    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/movies" component={Main} />
          <Route path="/login" render={(props)=><Login onErrorHandle="bug" {...props}/>} />
          <Route path="/articles" component={<Articles onhandleRedirect={this.handleRedirect}/>} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
        
      </div>
    )
  }
}

export default App
