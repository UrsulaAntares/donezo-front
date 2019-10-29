import React, { Component} from 'react'

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