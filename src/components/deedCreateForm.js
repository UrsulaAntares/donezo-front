import React, { Component, Fragment} from 'react'

class DeedCreateForm extends Component {
  

    constructor() {
        super()
        this.state = {
            name: null
           
        }
    }
 


    makeTheDeed = (event) => {
        // let data = {name: event.currentTarget.name.value}
        let data = {name: event.currentTarget.name.value, user_id: window.localStorage.user_id}
            event.preventDefault()
            console.log("you're making a new deed", data)
        fetch("http://localhost:3001/deeds/", {
            // method: 'POST',
            // headers: {
            //     'Content-Type': 'application/json',
            // },
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            // mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            // redirect: 'follow', // manual, *follow, error
            // referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(data)
        })
        // .then(res => res.json()).then(deed =>  console.log(deed) )
        
    }

    render() {

        return (
        <div className="comp box deedcreationform form">
            <section className="hero is-primary is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                            <form action="" className="box" onSubmit={(event) => this.makeTheDeed(event)}>
                                
                                <div className = "inner-form-box">
                                <div className="field">
                                    {/* <label for="name" className="label">Name your deed</label> */}
                                    <input name="name" className="input" type="text" placeholder="Name your deed" />
                                </div>
                                <div className="field">
                                    {/* <label htmlFor="date" className="label">When's it due?</label> */}
                                <input name="date" className="input" type="datetime" />
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