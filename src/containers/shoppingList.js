import React, { Component, Fragment} from 'react'
import ShoppingCard from '../components/shoppingCard'


class ShoppingList extends Component {
  
  
  
    render(props) {
    
    return <div> This is a list of thigs to get
     
     {this.props.shoppings ? this.props.shoppings.map(shopping => <ShoppingCard key={shopping.id}
        shopping={shopping} getShoppings={this.props.getShoppings}/> ) : null}
        
        </div>
    }
}

export default ShoppingList