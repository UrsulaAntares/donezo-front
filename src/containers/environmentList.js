import React, { Component, Fragment} from 'react'
import EnvironmentCard from '../components/environmentCard'


class EnvironmentList extends Component {
  
  
  
    render(props) {
    
    return <div> This is a list of environments {this.props.environments ? this.props.environments.map(environment => <EnvironmentCard 
        environment={environment} /> ) : null}</div>
    }
}

export default EnvironmentList