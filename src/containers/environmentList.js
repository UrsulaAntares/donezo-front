import React, { Component, Fragment} from 'react'
import EnvironmentCard from '../components/environmentCard'

class EnvironmentList extends Component {
  
  
  
    render(props) {
    return <div> {this.props.environments ? this.props.environments.map(environment => <EnvironmentCard 
        name={environment.name} link={environment.link} location={environment.location}/> ) : null}</div>
    }
}

export default EnvironmentList