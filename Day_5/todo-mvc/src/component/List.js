import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
  render() {
    const {itemsArray, onDelete, isDone} = this.props
    return (
      <div className="list-container">
        <ul className="List">
          {
            itemsArray.map((item) =>
            <ListItem item={item} onDelete={onDelete} key={item.id} isDone={isDone}/>
            ) 
          }
        </ul>
      </div>
    );
  }
}

export default List;