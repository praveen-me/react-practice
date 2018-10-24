import React, { Component } from 'react';
import List from './List';
import './../scss/App.scss';

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      listItems : [],
      itemValue : ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.firstChild.value;
    const obj = {
      value : value,
      id : this.state.listItems.length,
      done : false
    }
    this.setState(state => ({ 
      listItems : [...this.state.listItems, obj]
    }))
    e.target.firstChild.value = '';
  }

  handleDelete = (itemId) => {
    this.setState({
      listItems : this.state.listItems.filter(c => c.id !== itemId)
    });
  }

  handleDone = (e, itemId) => {
    let newArr = [...this.state.listItems];
    newArr[itemId].done = e.target.checked;
    this.setState(({
      listItems : newArr
    }))
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <form className="add-list-container" onSubmit={this.handleSubmit}>
          <input type="text" />
        </form>
        <List itemsArray={this.state.listItems} onDelete={this.handleDelete} isDone={this.handleDone}/>
      </div>
    );
  }
}

export default App;
