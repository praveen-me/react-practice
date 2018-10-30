import React, { Component } from 'react';

export class ErrorInternet extends Component {
  render() {
    return (
      <div>
        <h1>Please check your internet connection.</h1>
      </div>
    );
  }
}

export class Errorvalue extends Component {
  render() {
    return (
      <div>
        <h1>City's data not found. Please Check Again.</h1>
      </div>
    );
  }
}