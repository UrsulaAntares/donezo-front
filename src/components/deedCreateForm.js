import React, { Component} from 'react'


class DeedCreateForm extends Component {
  

    constructor() {
        super()
        this.state = {
            
        }

        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);

        }

        handleChange=(event) =>{
            this.setState({deed:{pack: event.currentTarget.pack.value, scale: event.currentTarget.scale.value, 
                title: event.currentTarget.title.value, user_id: window.localStorage.user_id,
                start: event.currentTarget.start.value, 
                end: event.currentTarget.start.value, 
                duetime: event.currentTarget.duetime.value, 
                description: event.currentTarget.description.value,
                supplies: event.currentTarget.supplies.value, 
                duration: event.currentTarget.duration.value,
                environment: event.currentTarget.environment.value, 
                importance: event.currentTarget.importance.value,
                desirability: event.currentTarget.desirability.value, tags: event.currentTarget.tags.value, 
                status: event.currentTarget.status.value, 
                cause_deed: event.currentTarget.cause_deed.value,
                result_deed: event.currentTarget.result_deed.value
            }});
          }



 


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
        }).then(something => {this.props.getDeeds(); this.props.tallyScore();
            this.setState({deed:{...this.state.deed, title: "", description: "",
             pack: "", supplies: "", duration: null, tags:"", status: ""}})

        }).then(this.props.getNewStuff())


        //add logic for rendering             
    }


    


    render() {

        return (
        <div className="comp box deedcreationform form">
            <section className="">
            <div className="">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="bar">
                            <form action="" className="box thinform" onSubmit={(event) => this.makeTheDeed(event)} onChange={this.handleChange}>
                                
                                <div className = "inner-form-box">

                                <div className="field">
                                    {/* <label for="title" className="label">Title your deed</label> */}
                                    <input name="title" className="input" type="text" placeholder="Title your deed" value={this.state.deed ? this.state.deed.title : ""}/>
                                </div>

                                <div className="field">
                                    {/* <label htmlFor="start" className="label">When's it due?</label> */}
                                <input name="start" className="input" type="date"  />
                                </div>
                                <div className="field">
                                    {/* <label htmlFor="start" className="label">Is there a time?</label> */}
                                <input name="duetime" className="input" type="time"  />
                                </div>

                                <div className="field">
                                    {/* <label htmlFor="duration" className="label">How many minutes will this take?</label> */}
                                <input name="duration" className="input number" type="number" />
                                </div>


                                <div className="field">
                                    <select name="scale" className="input" >
                                        <option value="" disabled defaultValue>What's the time scale?</option>
                                        <option value="Minutes">Minutes</option>
                                        <option value="Hours">Hours</option>
                                        <option value="Days">Days</option>
                                        <option value="Weeks">Weeks</option>
                                        <option value="Months">Months</option>
                                        <option value="Years">Years</option>
                                    </select>
                                </div>

                                <div className="field">
                                    <select name="status" className="input" >
                                        <option value="" disabled selected>What's the status?</option>
                                        <option value="Next">Next</option>
                                        <option value="Now">Now</option>
                                        <option value="Later">Later</option>
                                        <option value="Some Day">Some Day</option>
                                        <option value="Donezo">Donezo</option>
                                        <option value="Nevermind">Nevermind</option>
                                    </select>
                                </div>

                                <div className="field">
                                    
                                    <input name="description" className="input" type="text" placeholder="Add a description?" value={this.state.deed ? this.state.deed.description : ""}/>
                                </div>

                                <div className="field">
                                    
                                    <input name="supplies" className="input" type="text" placeholder="What supplies do you need to acquire?" value={this.state.deed ? this.state.deed.supplies : ""}/>
                                </div>

                                <div className="field">
                                    <input name="pack" className="input" type="text" placeholder="What do you need to pack?" value={this.state.deed ? this.state.deed.pack : ""}/>
                                </div>

                                <div className="field">
                                    <label htmlFor="importance" className="label">How important is this?</label>
                                    <input type="range" className="input" min="0" max="100"  defaultValue="0" class="slider" name="importance" />
                                </div>

                                <div className="field">
                                   <label htmlFor="desirability" className="label">How much do you want to do this?</label>
                                    <input type="range" className="input" min="-100" max="100" defaultValue="0"  class="slider" name="desirability" />
                                </div>

                                <div className="field">
                                    <input list="environments" name="environment" className="input" placeholder="Type to select or create an environment"></input>
                                    <datalist id="environments">
                                        {/* <option value="" disabled selected>What's the environment for this deed?</option> */}
                                        {this.props.environments ? this.props.environments.map(environment => <option key={environment.name} value={environment.name}></option> ) : null}
                                    </datalist>
                                </div>


                                <div className="field">
                                    <input list="unDoneDeeds" name="cause_deed" className="input" placeholder="Does this deed follow another?"></input>
                                    <datalist id="unDoneDeeds">
                                        <option value="" disabled selected>What's the predecessor for this deed?</option>
                                        {this.props.unDoneDeeds ? this.props.unDoneDeeds.map(deed => <option key={deed.id} value={deed.id} >{deed.title}</option> ) : null}
                                    </datalist>
                                </div> 

                                 <div className="field">
                                    <input list="unDoneDeeds" name="result_deed" className="input" placeholder="Does another deed follow this?"></input>
                                    <datalist id="unDoneDeeds">
                                        <option value="" disabled selected>What's the predecessor for this deed?</option>
                                        {this.props.unDoneDeeds ? this.props.unDoneDeeds.map(deed => <option key={deed.id} value={deed.id} >{deed.title}</option> ) : null}
                                    </datalist>
                                </div>    
                              

                                <div className="field">
                                    <input name="tags" className="input" type="text" placeholder="Tags, terms (use commas)" />
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