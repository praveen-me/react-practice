import React, { Component } from 'react';

class DisplayComponent extends Component {
  render() {
    const {classes, value} = this.props;
    return (
      <div className={`${classes} wrapper display-container`}>
        <div className="font-name">{classes}</div>
        <p className="text">{value}</p>
      </div>
    );
  }
}

export default DisplayComponent;