import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <span>{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default NavBar;