import React, { Component, Fragment} from 'react'
import DeedCard from '../components/deedCard'
import DeedDetail from '../components/deedDetail'

class DeedList extends Component {
  
  
  
    render() {
    return <div><h2>Deeds</h2>
    {this.props.deeds ? this.props.deeds.map(deed => <DeedDetail deed={deed} deed_id={deed.id}
        name={deed.name} tags={deed.tags} duration={deed.duration} importance={deed.importance} status={deed.status}
        desirability={deed.desirability} start={deed.start} duetime={deed.duetime}  supplies={deed.supplies} environment={deed.environment_id}
        scale={deed.scale} pack={deed.pack}       
        />  ) : null}</div>
    }
}

export default DeedList

