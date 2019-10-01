import React, { Component, Fragment} from 'react'

class DeedCard extends Component {
  
    updateDeed=(event)=> {
        let data = {status: event.currentTarget.status.value}
        let deed_id = event.currentTarget.name
     

            event.preventDefault()
            console.log("you're trying to update a deed", data)
        fetch(`http://localhost:3001/deeds/${deed_id}`, {
            method: 'PUT', 

            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },

            body: JSON.stringify(data)
        })

        //add logic for rendering             
    

    }
  
    render() {
    return <div className="box">
        <h2>{this.props.name}</h2>
        <h3>Importance: {this.props.importance} * Desirability: {this.props.desirability} = Score: {(this.props.importance * this.props.desirability /100)}</h3>
        {this.props.duedate ? <h4>Due:{this.props.duedate} {this.props.duetime ? this.props.duetime :null}</h4> :null}
        {this.props.scale ? <h4>Scale: {this.props.scale}</h4> : null}
        {this.props.supplies ? <p>Supplies: {this.props.supplies}</p> : null }
        {this.props.pack ? <p>Pack: {this.props.pack}</p> : null }
        {this.props.environment ? <p>Environment: {this.props.environment}</p> : null }
        {this.props.status ? <p>Status: {this.props.status}</p> : null }
        <form onSubmit={this.updateDeed} name={this.props.deed_id}>
            <div className="field">
                <select name="status" className="input" >
                    <option value="" disabled selected>{this.props.status}</option>
                    <option value="Next">Next</option>
                    <option value="Now">Now</option>
                    <option value="Later">Later</option>
                    <option value="Someday">Some Day</option>
                    <option value="Donezo">Donezo</option>
                    <option value="Nevermind">Nevermind</option>
                </select>
            </div>
            <input type="submit" className="button"/>
        </form>
    
    
    </div>
    }
}

export default DeedCard

