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
      itemsAll : [], 
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
      itemsAll : [...this.state.listItems, obj]
    }));
    e.target.firstChild.value = "";
  };

  handleDelete = itemId => {
    this.setState({
      listItems: this.state.listItems.filter(c => c.id !== itemId),
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

  showActive = (e) => {
    console.log(e.target,"is clicked")
    e.preventDefault();
    const allItems = this.state.itemsAll.filter(item => !item.done);

    this.setState({
      listItems : allItems
    })
  }

  showAll = (e) => {
    e.preventDefault();
    this.setState({
      listItems : this.state.itemsAll
    })
  }

  showCompleted = (e) => {
    e.preventDefault();
    const allItems = this.state.itemsAll.filter(item => item.done);

    this.setState({
      listItems : allItems
    }) 
  }

  handleClearCompleted = (e) => {
    e.preventDefault();
    this.state.itemsAll = this.state.itemsAll.filter(item => !item.done)

    this.setState({
      listItems : this.state.itemsAll
    })
  }

  render() {
    let leftItems = this.state.itemsAll.filter(item => !item.done);

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
            <div className="list-footer">
              <span className="items-left">{leftItems.length}   items left</span>
              <div className="lis-footer-btns">
                <button className="btn active" onClick={this.showAll}>All</button>
                <button className="btn" onClick={this.showActive}>Active</button>
                <button className="btn" onClick={this.showCompleted}>Completed</button>
              </div>
              <button className="btn" onClick={this.handleClearCompleted}>Clear Completed</button>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
