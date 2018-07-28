import React, { Component } from 'react';
import Item from './Item'
import './List.css'

class List extends Component  {

  deleteItem = () => {
    this.props.func(this.props.id)
  }


  render() {
    console.log('List component Render')
    return (
        <div >
        <ul>{
          this.props.history.map(input => <Item value={input.value} />)
        }</ul>

        </div>

        
    );
  }
}

export default List;
