import React, { PureComponent } from 'react';
import './App.css';
import Search from './components/Input'
import List from './components/List'
import { upper } from './sistem/Upper'

const initialState = {
  value:'',
  history: [],
  counter: 0
}

class App extends PureComponent {
  state = { ...initialState }

  onPlace = (el) => {
    const value = el.target.value
    this.setState({value})
  }

  handlePlace = (val) => {
    if(this.state.value === '') { 
      return
    }
    const history = [...this.state.history]
    const value = upper( this.state.value)
    const counter = this.state.counter + 1
    history.push({id: this.state.counter, value})
    this.setState({history, value: '', counter})
  }

  deletItem = (id) => {
    const history = this.state.history.filter((el) => el.id !== id)
    this.setState({ history });
  }

  render() {
    return (
      <div className='leaf'>
      <h2>Make Your List</h2>
      <div className='cent'>
        <Search value={this.state.value} func={this.onPlace}/> 
        <button className="btn btn-primary" onClick={this.handlePlace} >Add Place</button>
      </div>
        <ul>{
          this.state.history.map((el) => 
          <List func={this.deletItem} id={el.id} newValue={el.value}/>
          )}
        </ul>
      
      </div>
    );
  }
}

export default App;
