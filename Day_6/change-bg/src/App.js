import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      r : 0,
      g : 0,
      b : 0
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render() {
    const {r, g, b} = this.state;
    const styleApp = {
      height : '100vh',
      background : `rgb(${r},${g}, ${b})`,
      color : '#fff'
    }
    return (
      <div className="App" style={styleApp}>
       <div>R {0} <input type="range" name="r" min={0} max={255} onChange={this.handleChange} value={r}/> {r}</div>
       <div>G {0} <input type="range" name="g" min={0} max={255} onChange={this.handleChange} value={g}/> {g}</div>
       <div>B {0} <input type="range" name="b" min={0} max={255} onChange={this.handleChange} value={b}/> {b}</div>
      </div>
    );
  }
}

export default App;
