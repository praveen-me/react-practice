import React, { Component } from 'react';

class Button extends Component {
  render() {
    const {label,type} = this.props;
    if(type) {
      if(type === 'round') {
        return(
          <button className={`btn ${type}`}>+</button>
        )
      } else if(type === 'disabled') {
        return(
          <button className={`btn ${type}`} disabled>{label}</button>
        )
      }else {
        return(
          <button className={`btn ${type}`}>{label}</button>
        )
      } 
    } else if(!type) {
      return(
        <button className='btn'>{label}</button>
      )
    }
  }
}

export default Button;