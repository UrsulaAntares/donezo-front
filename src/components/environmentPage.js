import React, { Component} from 'react'

import DeedList from '../containers/deedList';

class EnvironmentPage extends Component {
  
  
  
    render(props) {
        // console.log(this.props)
    return <div className="card"> 
       
       {this.props.environment.name}
       {this.props.environment.link ? this.props.environment.link : null}
       {this.props.environment.location ? this.props.environment.location : null}
       <DeedList deeds={this.props.deeds}/>
       
    </div>
    }
}

export default EnvironmentPage