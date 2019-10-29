import React, { Component} from 'react'
import { BrowserRouter as Link } from "react-router-dom";

class DeedCard extends Component {

    // this might be bogus
    
    constructor(){
        super()
        this.state={
            
        }

        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange=(event) =>{
        this.setState({deed:{ ...this.state.deed, 
        
            status: event.currentTarget.status.value, 
       
            }   
        });
      }

  
    updateDeed=(event)=> {
        console.log(event)
        let data = {status: event.currentTarget.status.value}
        // let deed_id = event.currentTarget.title
        let deed_id = this.props.deed.id // this might be the same as the previous line; which is preferable?

            event.preventDefault()
            console.log("This is an id", deed_id)
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
        <Link style={{marginRight: '1em'}} to={`/deeds/${this.props.deed_id}`} ><h2>{this.props.title}</h2></Link>
        <h3>Importance: {this.props.importance} * Desirability: {this.props.desirability} = Score: {(this.props.importance * this.props.desirability /100)}</h3>
        {/* {this.props.start ? <h4>Due:{this.props.start} {this.props.duetime ? this.props.duetime :null}</h4> :null} */}
        {this.props.scale ? <h4>Scale: {this.props.scale}</h4> : null}
        {this.props.supplies ? <p>Supplies: {this.props.supplies}</p> : null }
        {this.props.pack ? <p>Pack: {this.props.pack}</p> : null }
        {/* {this.props.environment ? <p>Environment: {this.props.environment}</p> : null } */}
        {this.props.status ? <p>Status: {this.props.status}</p> : null }
        <form onSubmit={this.updateDeed} onChange={this.handleChange} title={this.props.deed_id}>
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

