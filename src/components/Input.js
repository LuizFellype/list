import React, { PureComponent } from 'react';
import './Input.css'

class Input extends PureComponent {

  render() {
    return (
        <React.Fragment>
          <input type='text' placeholder='What would you like to list, baby? ' value={this.props.value} onChange={this.props.func} ></input>
        </React.Fragment>
    );
  }
}

export default Input;
