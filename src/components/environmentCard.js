import React, { Component, Fragment} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class EnvironmentCard extends Component {
  
  
  
    render(props) {
        console.log(this.props)
    return <div className="card"> 
       <Link to={`/environments/${this.props.environment.name}`}>{this.props.environment.name}</Link> 
    </div>
    }
}

export default EnvironmentCard