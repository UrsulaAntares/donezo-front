import React, { Component} from 'react'
import DeedCard from '../components/deedCard'


class DeedList extends Component {
  
    constructor(){
        super()
        this.state={}
    }
  
    componentWillMount(){
        this.setState({deeds: this.props.deeds})
    }
  
    render() {
    return <div><h2>Deeds</h2>
    {this.state.deeds ? this.state.deeds.map(deed => <DeedCard deed={deed} deed_id={deed.id}
        title={deed.title} tags={deed.tags} duration={deed.duration} importance={deed.importance} status={deed.status}
        desirability={deed.desirability} start={deed.start} duetime={deed.duetime}  supplies={deed.supplies} environment={deed.environment_id}
        scale={deed.scale} pack={deed.pack}    getNewStuff={this.props.getNewStuff}   
        />  ) : null}</div>
    }
}

export default DeedList

