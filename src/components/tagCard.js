import React, { Component} from 'react'
import { BrowserRouter as  Link } from "react-router-dom";

class TagCard extends Component {
  
  
  
    render(props) {
        console.log(this.props)
    return <div className="card"> 
       <Link to={`/tags/${this.props.tag.name}`}>{this.props.tag.name}</Link> 
    </div>
    }
}

export default TagCard