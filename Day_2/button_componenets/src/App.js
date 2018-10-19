import React, { Component } from 'react';
import Button from './Button';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button label='Create Btn' type="primary"></Button>
        <Button label='Click' type="small"></Button>
        <Button label='Touch Me' type="big"></Button>
        <Button label='No Type'></Button>
        <Button label="Round" type="round" />
        <Button label="Disabled Button" type="disabled" />
      </div>
    );
  }
}

export default App;
