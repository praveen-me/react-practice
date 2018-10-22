import React, { Component } from 'react';
import * as emoji from './data/data.json';
import './App.scss';
import EmojiCard from './component/EmojiCard.js';

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
    return (
      <div className="App">
        <EmojiCard emojiesArray={this.state.emojies}/>
      </div>
    );
  }
}

export default App;
