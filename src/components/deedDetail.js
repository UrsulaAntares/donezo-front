import React, { Component, Fragment} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class DeedDetail extends Component {


    constructor(){
        super()
        this.state={
            
        }

        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange=(event) =>{
        this.setState({deed:{ ...this.state.deed, 
            title: event.currentTarget.title.value,
            scale: event.currentTarget.scale.value,  
            start: event.currentTarget.start.value,
            end: event.currentTarget.start.value,
            duetime: event.currentTarget.duetime.value, 
            description: event.currentTarget.description.value,
            duration: event.currentTarget.duration.value,
            supplies: event.currentTarget.supplies.value, 
            pack: event.currentTarget.pack.value, 
            environment: event.currentTarget.environment.value, 
            environment_name: event.currentTarget.environment.value,
            importance: event.currentTarget.importance.value,
            desirability: event.currentTarget.desirability.value, 
            tags: event.currentTarget.tags.value,
            shoppings: event.currentTarget.shoppings.value,
            status: event.currentTarget.status.value, 
            cause_deed: event.currentTarget.cause_deed.value,
            result_deed: event.currentTarget.result_deed.value
            }   
        });
      }


    componentWillMount(){
        this.setState({deed: this.props.deed})
           }


           componentDidMount(){
                if (this.state.deed) {
                    if (this.state.deed.start){
                        this.setState({deed: {...this.state.deed, end: this.state.deed.start}})
                    }
                    if (this.state.deed.duetime || this.state.deed.tags || this.state.deed.shoppings) {
                        this.setState({deed: {...this.state.deed, duetime: this.state.deed.duetime ? this.state.deed.duetime.split("T")[1].slice(0,5) : null, 
                        tags: this.state.deed.tags ? this.state.deed.tags.map(tag => {return tag.name}).join(", ") : null,
                        shoppings: this.state.deed.shoppings ? this.state.deed.shoppings.map(shopping => {return shopping.title}).join(", ") : null,
                        environment_name: this.state.deed.environment ? this.state.deed.environment.name : null 
                    }
                    })
                    }

                }

            
           }


  
    updateDeed=(event)=> {
        let data = {status: event.currentTarget.status.value, 
            title: event.currentTarget.title.value,
            importance: event.currentTarget.importance.value,
            desirability: event.currentTarget.desirability.value, 
            environment_name: this.state.deed.environment_name,
            environment: event.currentTarget.environment_name,
            start: event.currentTarget.start.value,
            end: event.currentTarget.start.value,
            duetime: event.currentTarget.duetime.value, 
            duration: event.currentTarget.duration.value,
            supplies: event.currentTarget.supplies.value, 
            pack: event.currentTarget.pack.value, 
            scale: event.currentTarget.scale.value,
            description: event.currentTarget.description.value,
            tags: event.currentTarget.tags.value,
            shoppings: event.currentTarget.shoppings.value,
            result_deed: event.currentTarget.result_deed.value,
            cause_deed: event.currentTarget.cause_deed.value
        }
        // let deed_id = event.currentTarget.name
        let deed_id = this.props.deed.id
     
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
        if (this.state.deed) {
       
    return <div className="box">
        
        <form onChange={this.handleChange} onSubmit={this.updateDeed}  name={this.props.deed_id}>
        
            <div className="field">
                <label for="title" className="label">Title your deed</label>
                <h2>
                <input name="title" className="input" type="text" placeholder="Title your deed" value={this.state.deed.title? this.state.deed.title : this.props.deed.title}/>
                </h2>
            </div>

        <h3>Importance: {this.state.deed.importance} * Desirability: {this.state.deed.desirability} = Score: {(this.state.deed.importance * this.state.deed.desirability /100)}</h3>
        
       
        
        {/* {this.state.deed.start ? <h4>Due: {this.state.deed.start} {this.state.deed.duetime ? this.state.deed.duetime :null}</h4> :null} */}

        <div className="field">
            <label htmlFor="start" className="label">When's it due?</label>
            <input name="start" className="input" type="date" value={this.state.deed ? this.state.deed.start : null} />
        </div>
    
        <div className="field">
            <label htmlFor="duetime" className="label">Is there a specific time?</label>
            <input name="duetime" className="input" type="time"  value={this.state.deed && this.state.deed.duetime ? this.state.deed.duetime : null} />
        </div>

        <div className="field">
            <label htmlFor="importance" className="label">How important is this?</label>
            <input type="range" className="input" min="-100" max="100"  defaultValue="0" value={this.state.deed.importance}
             class="slider" name="importance" />
        </div>

        <div className="field">
            <label htmlFor="desirability" className="label">How much do you want to do this?</label>
            <input type="range" className="input" min="-100" max="100" defaultValue="0" value={this.state.deed.desirability}
             class="slider" name="desirability" />
        </div>

        <div className="field">
            <label htmlFor="duration" className="label">How big is it...</label>
            <input name="duration" className="input number" type="number" value={this.state.deed ? this.state.deed.duration : null} />
        </div>

        <div className="field">
        <label htmlFor="duration" className="label">...on what scale?</label>
            <select name="scale" className="input" >
            
                <option value={this.state.deed ? this.state.deed.scale : ""} disabled
                 selected>{this.state.deed.scale ? this.state.deed.scale : "Minutes, Hours, Days, Eons"}</option>
                <option value="Minutes">Minutes</option>
                <option value="Hours">Hours</option>
                <option value="Days">Days</option>
                <option value="Weeks">Weeks</option>
                <option value="Months">Months</option>
                <option value="Years">Years</option>
            </select>
        </div>


        {/* {this.props.supplies ? <p>Supplies: {this.props.supplies}</p> : null }
        {this.props.pack ? <p>Pack: {this.props.pack}</p> : null } */}

        <div className="field">
            <label className="label" htmlFor="environments">Environment where this happens (type to select or enter a new one): {this.state.deed && this.state.deed.environment ? <Link to={`/environments/${this.state.deed.environment.name}`} >{this.state.deed.environment.name}</Link> : null}</label>
            <input list="environments" name="environment" className="input"></input>
            <datalist id="environments"  placeholder="Type to select or create an environment">
                {this.props.environments ? this.props.environments.map(environment => <option key={environment.id} value={environment.name}></option> ) : null}
            </datalist>
        </div>

        <div className="field">
            <label for="name" className="label">Description</label>
            <input name="description" className="input" type="text" placeholder="Add a description" value={this.state.deed ? this.state.deed.description : ""}/>
        </div>

        <div className="field">   
            <label for="name" className="label">Things to get for this</label>                   
            <input name="supplies" className="input" type="text" placeholder="What supplies do you need to acquire?" value={this.state.deed ? this.state.deed.supplies : ""}/>
        </div>

        <div className="field">
            <label for="name" className="label">Things to pack for this</label>
            <input name="pack" className="input" type="text" placeholder="What do you need to pack?" value={this.state.deed ? this.state.deed.pack : ""}/>
        </div>

        <div className="field">
            
            <label for="name" className="label">Tags: {this.props.deed.tags ? this.props.deed.tags.map(tag => <Link style={{marginRight: '1em'}} to={`/tags/${tag.name}`} >{tag.name}</Link>) : null}</label>
            <input name="tags" className="input" type="text" placeholder="Tags, terms (use commas)" value={this.state.deed && this.state.deed.tags ? this.state.deed.tags : null}/>
        </div>

        <div className="field">
            
            <label for="name" className="label">Shopping List: {this.props.deed.shoppings ? this.props.deed.shoppings.map(shopping => <Link style={{marginRight: '1em'}} to={`/shoppings/${shopping.title}`} >{shopping.title}</Link>) : null}</label>
            <input name="shoppings" className="input" type="text" placeholder="Things to get (use commas)" value={this.state.deed && this.state.deed.shoppings ? this.state.deed.shoppings : null}/>
        </div>

        <div className="field">
            <label for="cause_deed" className="label">This deed follows: {this.state.deed && this.state.deed.chores ? 
                this.state.deed.chores.map(chore => <Link style={{marginRight: '1em'}} to={`/deeds/${chore.chore.id}`} >
                {chore.chore.title}</Link>) : null }</label>
            <input list="unDoneDeeds" name="cause_deed" className="input" placeholder="Does this deed follow another?"></input>
            <datalist id="unDoneDeeds">
                <option value="" disabled selected>What's the predecessor for this deed?</option>
                {this.props.unDoneDeeds ? this.props.unDoneDeeds.map(deed => <option key={deed.id} value={deed.id} >{deed.title}</option> ) : null}
            </datalist>
        </div> 

            <div className="field">
            <label for="result_deed" className="label">If you do this, then: {this.state.deed && this.state.deed.gratifications ?
                 this.state.deed.gratifications.map(grat => <Link style={{marginRight: '1em'}} to={`/deeds/${grat.gratification.id}`} >{grat.gratification.title}</Link>)
                  : null }</label>

            <input list="unDoneDeeds" name="result_deed" className="input" placeholder="Does another deed follow this?"></input>
            <datalist id="unDoneDeeds">
                <option value="" disabled selected>What's the predecessor for this deed?</option>
                {this.props.unDoneDeeds ? this.props.unDoneDeeds.map(deed => <option key={deed.id} value={deed.id} >{deed.title}</option> ) : null}
            </datalist>
        </div> 




        <div className="field">
        <label className="label" htmlFor="status">What's the activity status:</label>
            <select name="status" className="input" >
                <option value="" disabled selected>{this.props.status}</option>
                <option value="Next">Next</option>
                <option value="Now">Now</option>
                <option value="Later">Later</option>
                <option value="Some Day">Some Day</option>
                <option value="Donezo">Donezo</option>
                <option value="Nevermind">Nevermind</option>
            </select>
        </div>
        <input type="submit" className="button"/>
        </form>
    
    
    </div>
    }
}
}

export default DeedDetail

