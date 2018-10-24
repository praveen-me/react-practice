import React, { Component } from "react";
import List from "./List";
import Header from './Header';
import ListAddForm from './ListAddForm';
import "./../scss/App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [],
      leftItemArray : [],
      completedItemsArray : []
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const value = e.target.firstChild.value;
    const obj = {
      value: value,
      id: this.state.listItems.length,
      done: false
    };
    this.setState(({
      listItems: [...this.state.listItems, obj],
    }));
    e.target.firstChild.value = "";
  };

  handleDelete = itemId => {
    this.setState({
      listItems: this.state.listItems.filter(c => c.id !== itemId)
    });
  };

  handleDone = (e, id) => {
    let newArr = [...this.state.listItems];
    newArr.forEach(item => {
        if(item.id === id) {
          item.done = !item.done;
        }
      }    
    );
    this.setState({
      listItems: newArr
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main className="wrapper">
          <div className="list-wrapper">
            <ListAddForm onSubmit={this.handleSubmit}/>
            <List
              itemsArray={this.state.listItems}
              onDelete={this.handleDelete}
              isDone={this.handleDone}
            />
            <div>
              <span>{this.state.leftItemArray ? this.state.leftItemArray.length : 0}items left</span>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
