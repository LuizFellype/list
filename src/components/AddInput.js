import React, { PureComponent } from 'react';
import './Input.css'

class AddInput extends PureComponent {
  state = {
    value: '',
  }

  handleValue = (e) => {
    const value = e.target.value
    this.setState({ value })
  }

  onAddInput = () => {
    this.props.picking(this.state.value)
    this.setState({ value: '' })
  }

  render() {
    console.log(`C -> addInput Render`)
    return (
        <React.Fragment>
          <input type='text' value={this.state.value} onChange={this.handleValue} placeholder='What would you like to list, baby?'></input>
          <button className='btn btn-primary' onClick={this.onAddInput}>Add Input</button>
        </React.Fragment>
    );
  }
}

export default AddInput;
