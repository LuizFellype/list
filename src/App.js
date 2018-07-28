import React, { PureComponent } from 'react';
import './App.css';
import AddInput from './components/AddInput'
// import List from './components/List'
import { upper } from './sistem/Upper'

const initialState = {
  history: [],
  counter: 0
}

class App extends PureComponent {
  state = { ...initialState }

  onAddInput = (val) => {
    console.log(val)
    if(this.state.value === '') { 
      return
    }
    const history = [...this.state.history]
    const value = upper(val)
    history.push({id: this.state.counter, value})
    const counter = this.state.counter + 1
    this.setState({history, counter})
  }

  // deletItem = (id) => {
  //   const history = this.state.history.filter((el) => el.id !== id)
  //   this.setState({ history });
  // }

  render() {
    console.log('F -> App Render')
    console.log(this.state.history[this.state.counter -1])
    return (
      <div className='leaf'>
      <h2>Make Your List</h2>
      <div className='cent'>
        <AddInput picking={this.onAddInput}/> 
      </div>
        {/* <ul>{
          this.state.history.map((el) => 
          <List func={this.deletItem} id={el.id} newValue={el.value}/>
          )}
        </ul> */}
      
      </div>
    );
  }
}

export default App;
