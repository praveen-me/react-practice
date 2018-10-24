import React, { Component } from 'react';

class ListItem extends Component {
  
  render() {
    const {value, id, done} = this.props.item;
    const {onDelete , isDone} = this.props;
    let doneItem;
    if(done) {
      doneItem =  <p className="item-name done">{value}</p>;
    } else {
      doneItem =  <p className="item-name">{value}</p>;
    }

    return (
      <li className="list-item" id={id}>
        <input type="checkbox" onClick={(e) => isDone(e,id)} checked={done}/>
        {
          doneItem
        }
        <button className="delete-item" onClick={() => onDelete(id)}>X</button>
      </li>
    );
  }
}

export default ListItem;