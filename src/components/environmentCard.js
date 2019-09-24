import React, { Component, Fragment} from 'react'

class EnvironmentCard extends Component {
  
  
  
    render(props) {
        console.log(this.props)
    return <div> 
       <h1>{this.props.name}</h1> 
    </div>
    }
}

export default EnvironmentCard