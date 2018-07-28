import React, { PureComponent } from 'react';
// import Item from './Item'
import './List.css'

class List extends PureComponent  {

  deleteItem = () => {
    this.props.func(this.props.id)
  }

  render() {
      console.log('Item Component Render')
    return (
        <div className='todoWrapper'>
            <button className='removeTodo' 
            onClick={this.deleteItem}>DELETE
            </button>{this.props.newInput}
        </div> 
    
    )} 
}

export default List;
