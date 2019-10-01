import React, { Component, Fragment} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DeedList from '../containers/deedList';

class TagPage extends Component {
  
  
  
    render(props) {
        // console.log(this.props)
    return <div className="card"> 
       
       {this.props.tag.name}
    
       <DeedList deeds={this.props.deeds}/>
       
    </div>
    }
}

export default TagPage