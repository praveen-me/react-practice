import React, { Component } from 'react';

class ListAddForm extends Component {
  render() {
    return (
      <form className="add-list-container" onSubmit={this.props.onSubmit}>
        <input type="text" className="item-value" placeholder="What needs to be done?"/>
      </form>
    );
  }
}

export default ListAddForm;