import React, { Component} from 'react'
import DeedList from '../containers/deedList'
import EnvironmentList from '../containers/environmentList'

// import DeedUpdateForm from './deedUpdateForm'

class Dashboard extends Component {

    constructor(){
        super();
        this.state = {

        }
    }
  
    // getEnvironments=()=> {
    //     fetch('http://localhost:3001/environments').then(res => res.json()).then(environments => this.setState({environments: environments}))
    // }

    //need to filter by this user soon
    // getDeeds=()=> {
    //     fetch('http://localhost:3001/deeds').then(res => res.json()).then(deeds => this.setState({deeds: deeds})).then(this.tallyScore)
    // }

    


    // tallyScore=()=>{
        
        
    //     let doneOnes =  this.state.deeds ? this.state.deeds.filter((deed) => {return deed.status === "Donezo"} ) : [{desirability: 0, importance:0}]
    //     let unDoneDeeds =  this.state.deeds ? this.state.deeds.filter((deed) => {return deed.status !== "Donezo" && deed.status !== "Nevermind"} ) : [{desirability: 0, importance:0}]
       
    //     console.log("This is what's donezo:", doneOnes)
    //     let totalDesirability = 0
    //     let totalImportance = 0
    //     let totalDeedScore  = 0
    //     this.setState({unDoneDeeds: unDoneDeeds})
    //     doneOnes.forEach(deed => {
    //         totalDesirability+= deed.desirability; 
    //         totalImportance+= deed.importance; 

    //         totalDeedScore += (deed.desirability * deed.importance /100)
    //         })
    //     this.setState({score: totalDeedScore})  
    //     console.log("Total desirability of finished tasks:", totalDesirability)
    //     console.log("Total importance of finished tasks:", totalImportance)
    //     console.log("Total deed score of finished tasks:", totalDeedScore)
    // } 
  
    componentWillMount(){
        // this.getEnvironments()
        // this.getDeeds()
        
    }

    // componentDidMount() {
    //     this.tallyScore()
    // }
  
    render() {
    return <div> 
        {/* <div>Balance:{this.state.score ? this.state.score : 0 }</div> 
        <DeedCreateForm user={this.state.user} environments={this.state.environments} unDoneDeeds={this.state.unDoneDeeds? this.state.unDoneDeeds : null} 
            getDeeds={this.getDeeds} tallyScore={this.tallyScore}
            functionToRender={()=>console.log("You tried to make an deed and now you're trying to render it")}/> */}
        {this.props.deeds ? <DeedList deeds = {this.props.deeds} /> : null}
        {this.props.environments ? <EnvironmentList environments = {this.props.environments} /> : null}
        </div>
    }
}

export default Dashboard