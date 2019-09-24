import React, { Component, Fragment} from 'react'


class DeedCreateForm extends Component {
  

    constructor() {
        super()
        this.state = {
            name: null
        }

        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);

        }

        handleChange=(event) =>{
            this.setState({deed:{pack: event.currentTarget.pack.value, scale: event.currentTarget.scale.value, 
                name: event.currentTarget.name.value, user_id: window.localStorage.user_id,
                due: event.currentTarget.due.value, description: event.currentTarget.description.value,
                supplies: event.currentTarget.supplies.value, duration: event.currentTarget.duration.value,
                environment: event.currentTarget.environment.value, importance: event.currentTarget.importance.value,
                desirability: event.currentTarget.desirability.value, 
                
            }});
          }


        //   handleSubmit =(event)=> {
        //     alert('The form was submitted: ' + this.state.name);
        //     event.preventDefault();
        //   }
    
 


    makeTheDeed = (event) => {

        
        let data = this.state.deed

            event.preventDefault()
            console.log("you're making a new deed", data)
        fetch("http://localhost:3001/deeds/", {
            method: 'POST', 
            // mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },

            body: JSON.stringify(data)
        }).then(something => {this.setState({deed:{...this.state.deed, name: "", notes: "", pack: "", supplies: "", duration: ""}})
            console.log("We should have set the state")
        })

        
        
    }

    render() {

        return (
        <div className="comp box deedcreationform form">
            <section className="hero is-primary is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                            <form action="" className="box" onSubmit={(event) => this.makeTheDeed(event)} onChange={this.handleChange}>
                                
                                <div className = "inner-form-box">

                                <div className="field">
                                    {/* <label for="name" className="label">Name your deed</label> */}
                                    <input name="name" className="input" type="text" placeholder="Name your deed" value={this.state.deed ? this.state.deed.name : ""}/>
                                </div>

                                <div className="field">
                                    {/* <label htmlFor="date" className="label">When's it due?</label> */}
                                <input name="due" className="input" type="datetime-local" defaultValue={(new Date()).toISOString().slice(0,16)} />
                                </div>

                                <div className="field">
                                    {/* <label htmlFor="duration" className="label">How many minutes will this take?</label> */}
                                <input name="duration" className="input" type="number" />
                                </div>


                                <div className="field">
                                    <select name="scale" className="input" >
                                        <option value="" disabled selected>What's the time scale?</option>
                                        <option value="minutes">Minutes</option>
                                        <option value="hours">Hours</option>
                                        <option value="days">Days</option>
                                        <option value="weeks">Weeks</option>
                                        <option value="months">Months</option>
                                        <option value="years">Years</option>
                                    </select>
                                </div>

                                <div className="field">
                                    
                                    <input name="description" className="input" type="text" placeholder="Add some notes" />
                                </div>

                                <div className="field">
                                    
                                    <input name="supplies" className="input" type="text" placeholder="What supplies do you need?" />
                                </div>

                                <div className="field">
                                    <input name="pack" className="input" type="text" placeholder="What do you need to pack?" />
                                </div>

                                <div className="field">
                                    <input type="range" className="input" min="-100" max="100"  defaultValue="0" class="slider" name="importance" />
                                </div>

                                <div className="field">
                                    <input type="range" className="input" min="-100" max="100" defaultValue="0"  class="slider" name="desirability" />
                                </div>

                                <div className="field">
                                       
                                       
                                    <input list="environments" name="environment" className="input"></input>
                                    <datalist id="environments">
                                        {this.props.environments ? this.props.environments.map(environment => <option key={environment.id} value={environment.name}></option> ) : console.log("No environments")}
                                       
                                         
                         
                                    </datalist>
                                </div>

                                <input type="submit" className="button"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>        
            </div>
        </section>
            
            
        </div>
        )
    }

}
export default DeedCreateForm