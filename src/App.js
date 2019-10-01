import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Login from './components/login'
import Dashboard from './components/dashboard'
import NavBar from './components/navbar';
import EnvironmentList from './containers/environmentList';
import DeedCreateForm from './components/deedCreateForm';
import DeedList from './containers/deedList';
import EnvironmentPage from './components/environmentPage';
import TagPage from './components/tagPage'
import TagList from './containers/tagList'
import Calendar from './containers/calendar';

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

    getEnvironments=()=> {
      fetch('http://localhost:3001/environments').then(res => res.json()).then(environments => this.setState({environments: environments}))
    }

    getTags=()=> {
      fetch('http://localhost:3001/tags').then(res => res.json()).then(tags => this.setState({tags: tags}))
    }

    getDeeds=()=> {
      fetch('http://localhost:3001/deeds').then(res => res.json()).then(deeds => this.setState({deeds: deeds})).then(this.tallyScore)
    }

    componentWillMount(){
      this.getEnvironments()
      this.getDeeds()
      this.getTags()
      // let unDoneDeeds =  this.state.deeds.filter((deed) => {return deed.status !== "Donezo" && deed.status !== "Nevermind"} )
      //   this.setState({unDoneDeeds: unDoneDeeds})
    }

    componentDidMount(){
      // if (this.state.deeds) {
      //   let unDoneDeeds =  this.state.deeds.filter((deed) => {return deed.status !== "Donezo" && deed.status !== "Nevermind"} )
      //   this.setState({unDoneDeeds: unDoneDeeds})
      //   }
    }

    tallyScore=()=>{
      let doneDeeds =  this.state.deeds ? this.state.deeds.filter((deed) => {return deed.status === "Donezo"} ) : [{desirability: 0, importance:0}]
      let unDoneDeeds =  this.state.deeds ? this.state.deeds.filter((deed) => {return deed.status !== "Donezo" && deed.status !== "Nevermind"} ) : [{desirability: 0, importance:0}]
     
      // console.log("This is what's donezo:", doneDeeds)
      let totalDesirability = 0
      let totalImportance = 0
      let totalDeedScore  = 0
      this.setState({unDoneDeeds: unDoneDeeds})
      this.setState({doneDeeds: doneDeeds})
      doneDeeds.forEach(deed => {
          totalDesirability+= deed.desirability; 
          totalImportance+= deed.importance; 

          totalDeedScore += (deed.desirability * deed.importance /100)
          })
      this.setState({score: totalDeedScore})  
      console.log("Total desirability of finished tasks:", totalDesirability)
      console.log("Total importance of finished tasks:", totalImportance)
      console.log("Total deed score of finished tasks:", totalDeedScore)
  } 


    render () {
      return (
        
        <Router>
        <div className="App">
          {/* <Header className="App-header"/> */}
          <NavBar logged_in={!!this.state.user} updateUser={this.updateUser} />

          <div>Balance:{this.state.score ? this.state.score : 0 }</div> 
        <DeedCreateForm user={this.state.user} environments={this.state.environments} unDoneDeeds={this.state.unDoneDeeds? this.state.unDoneDeeds : null} 
            getDeeds={this.getDeeds} tallyScore={this.tallyScore}
            functionToRender={()=>console.log("You tried to make an deed and now you're trying to render it")}/>

          <Route exact path = "/" render = {() => 
              {return this.state.user ? <Dashboard {...this.state.user}/> : <Login updateUser={this.updateUser} /> }
              }  />
          <Route path="/dashboard" render={()=>
            {return <Dashboard environments={this.state.environments} deeds={this.state.unDoneDeeds}/>}} />
          

          <Route exact path="/environments" render={() =>
            {return <EnvironmentList environments={this.state.environments}/>}} />

          <Route exact path="/tags" render={() =>
            {return <TagList tags={this.state.tags}/>}} />


          <Route path="/done" render={() =>   
            {return <DeedList deeds={this.state.donedeeds}/>}} />

          <Route path="/login" component={Login} />

          <Route path="/calendar" exact  render={()=> { return this.state.unDoneDeeds ? <Calendar deeds={this.state.unDoneDeeds}/> : null }} />


          <Route  path={`/environments/:name`} render = {props => {
           
              console.log("Props in App", props.match.params.name)
              // console.log("Trips State in App", this.state.trips)
              const loadEnvironment = () => {
                return this.state.environments ? this.state.environments.find(environment => {
                  
                  return props.match.params.name === environment.name
                }) : null
              }

              if (this.state.environments){
              return (<div>
                <EnvironmentPage environment = {loadEnvironment()} deeds={this.state.deeds? this.state.deeds.filter(deed=> {return deed.environment_id === loadEnvironment().id}) :null}/>
               </div>
              )}
          }
            }/>


          <Route  path={`/tags/:name`} render = {props => {
           
           console.log("Props in App", props.match.params.name)
           // console.log("Trips State in App", this.state.trips)
           const loadTag = () => {

             return this.state.tags ? this.state.tags.find(tag => {
               
               return props.match.params.name.toLowerCase() === tag.name.toLowerCase()
             }) : null
           }

           if (this.state.tags){
            
           return (<div>
             Here be a tags worth
             <TagPage tag = {loadTag()} deeds={this.state.deeds? this.state.deeds.filter(deed=> {return deed.tags.map(t => t.name).includes(loadTag().name)}) :null}/>
            </div>
           )}
       }
         }/>

          </div>
      </Router>
       

       
       )}
        
          
        

}

export default App;
