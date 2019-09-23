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
  
  
  
    render() {
    return <div> 
        
        <DeedCreateForm user={this.state.user} functionToRender={()=>console.log("You tried to make an deed and now you're trying to render it")}/>
        {this.state.deeds ? <DeedList deeds = {this.state.deeds} /> : null}
        {this.state.environments ? <EnvironmentList environments = {this.state.environments} /> : null}
        </div>
    }
}

export default Dashboard