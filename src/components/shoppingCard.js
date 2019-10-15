import React, { Component, Fragment} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ShoppingCard extends Component {
  
    clickhandler=()=>{
        // console.log("You clicked the thing")

        fetch(`http://localhost:3001/shoppings/${this.props.shopping.id}`, {
            method: 'DELETE'
        }).then(this.props.getShoppings)
    }
  
    render() {
       
    return <div className="card"> 
  
       {this.props.shopping.title} <button onClick={this.clickhandler}>X</button>
    </div>
    }
}

export default ShoppingCard