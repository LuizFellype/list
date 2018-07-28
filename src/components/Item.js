import React, { Component } from 'react';


class Item extends Component  {

  deleteItem = () => {
    this.props.func(this.props.id)
  }

  render() {
    return (
        <div className='todoWrapper'>
            <button 
            className='removeTodo' 
            onClick={this.deleteItem}>DELETE
            </button>{this.props.value}
    </div> 
    
    )} 
}


export default Item;
