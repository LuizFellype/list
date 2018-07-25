import React, { Component } from 'react';
import './List.css'

class List extends Component  {

  deleteItem = () => {
    this.props.func(this.props.id)
  }

  render() {
    return (
        <div className='todoWrapper'>
         <button className='removeTodo' onClick={this.deleteItem}>DELETE</button> {this.props.newValue}
        </div>
    );
  }
}

export default List;
