import React, { Component} from 'react'

class ShoppingCard extends Component {
  
    clickhandler=()=>{


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