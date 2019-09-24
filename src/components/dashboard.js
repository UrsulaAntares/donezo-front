import React, { Component, Fragment} from 'react'
import DeedList from '../containers/deedList'
import EnvironmentList from '../containers/environmentList'
import DeedCreateForm from './deedCreateForm'
import DeedUpdateForm from './deedUpdateForm'

class Dashboard extends Component {

    constructor(){
        super();
        this.state = {

        }
    }
  
    getEnvironments=()=> {
        fetch('http://localhost:3001/environments').then(res => res.json()).then(environments => this.setState({environments: environments}))
    }
  
    componentWillMount(){
        this.getEnvironments()
    }
  
    render() {
    return <div> 
        
        <DeedCreateForm user={this.state.user} environments={this.state.environments} functionToRender={()=>console.log("You tried to make an deed and now you're trying to render it")}/>
        {this.state.deeds ? <DeedList deeds = {this.state.deeds} /> : null}
        {this.state.environments ? <EnvironmentList environments = {this.state.environments} /> : null}
        </div>
    }
}

export default Dashboard