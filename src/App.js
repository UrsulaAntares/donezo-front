import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Login from './components/login'
import Dashboard from './components/dashboard'
import NavBar from './components/navbar';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      user: null,
    }
  }


  updateUser = (user) => {
    this.setState({user: user});
    window.localStorage.setItem("username", user.username)
    window.localStorage.setItem("user_id", user.id)
  }

componentDidMount() {
  if (!window.localStorage.user === null) {
    console.log(`We already have a user and their name is ${window.localStorage.username}`)
    fetch(`http://localhost:3001/users/${window.localStorage.username}`).then(res => res.json())
      .then(user => {
        this.updateUser(user)
      })
    }else{
      this.setState({loading: false})
      console.log("okay, no pre-existing user")
    }
  }

  checkUser = () => {
    if (!window.localStorage.user === null) {
      console.log(`We already have a user and their name is ${window.localStorage.username}`)
      fetch(`http://localhost:3001/users/${window.localStorage.username}`).then(res => res.json())
        .then(user => {
          this.updateUser(user)
        })
      }else{
        console.log("okay, no pre-existing user")
      }
    }



    render () {
      return (
        
        <Router>
        <div className="App">
          {/* <Header className="App-header"/> */}
          <NavBar logged_in={!!this.state.user} updateUser={this.updateUser} />

          <Route exact path = "/" render = {() => 
              {return this.state.user ? <Dashboard {...this.state.user}/> : <Login updateUser={this.updateUser} /> }
              }  />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />


        </div>
      </Router>
       

       
       )}
        
          
        

}

export default App;
