import React, { Component, Fragment} from 'react'

class Login extends Component {

    constructor() {
        super()

        this.state={
            username: "",
            password: ""
        }
    }

    handleChange = (e, {name, value}) => {
        this.setState({[name]: value});
    }


    handleLoginSubmit = (event) => {
        event.preventDefault()
        console.log("you're trying to get users")
        this.setState({username: event.currentTarget.username.value})
        this.setState({password: event.currentTarget.password.value})
        
        if (this.state.username) {
            
        fetch(`http://localhost:3001/users/${this.state.username}`)
        .then(res => res.json())
        .then(user  => {
            this.props.updateUser(user)
            console.log(user)}
            )
        }
            
    }

    getUsers=()=> {
        let users;
        // Previously this was just checking the list
        // fetch('http://localhost:3001/users').then(res=>res.json()).then(gottenusers => users.push(gottenusers))
        console.log(users)
        return users
    }

    checkUser = (event) => {
        event.preventDefault()
        console.log("Checking User", event.currentTarget.username.value)
        this.setState({user: event.currentTarget.username.value})
    }

    render() {
        return(
            <Fragment >
            <div className="comp login box">
            <section className="hero is-primary is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                            <form action="" className="box" onSubmit={(event) => this.handleLoginSubmit(event)}>
                            
                                <div className = "inner-form-box">
                                    <div className="field">
                                        {/* <label for="username" className="label">Username</label> */}
                                        <input name="username" className="input" type="text" placeholder="Username" />
                                    </div>
                                    <div className="field">
                                        {/* <label for="password" className="label">Password</label> */}
                                    <input name="password" className="input" type="password" placeholder="Password" />
                                    </div>
                                    <div className = "login-button-div">
                                        <input type="submit" className="button" value = "Login"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>        
            </div>
        </section>
    </div>
</Fragment>

        )
    }
} 

export default Login