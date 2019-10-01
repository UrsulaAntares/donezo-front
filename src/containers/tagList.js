import React, { Component, Fragment} from 'react'
import TagCard from '../components/tagCard'


class TagList extends Component {
  
  
  
    render(props) {
    
    return <div> This is a list of tags {this.props.tags ? this.props.tags.map(tag => <TagCard 
        tag={tag} /> ) : null}</div>
    }
}

export default TagList