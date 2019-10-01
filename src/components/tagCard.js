import React, { Component, Fragment} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class TagCard extends Component {
  
  
  
    render(props) {
        console.log(this.props)
    return <div className="card"> 
       <Link to={`/tags/${this.props.tag.name}`}>{this.props.tag.name}</Link> 
    </div>
    }
}

export default TagCard