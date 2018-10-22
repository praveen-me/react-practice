import React, { Component } from 'react';
import * as emoji from './../data/data.json';
import './../scss/App.scss';
import Header from './Header'
import EmojiContainer from './EmojiContainer.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emojies : []
    }
  }

  componentWillMount() {
    const data = emoji;
    this.setState({
      emojies : data.default
    })
  }

  render() {
    const {emojies} = this.state;
    return (
      <div className="App">
        <Header emojies={emojies}/>
        <EmojiContainer emojiesArray={emojies}/>
      </div>
    );
  }
}

export default App;
