import React, { Component } from 'react';
import './../App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value : 0
    }
  }

  calculate = (e) => {
    const operation = e.target.value[0];
    if(operation === '+'){
      this.setState({
        value : this.state.value + Number(e.target.value.slice(1))
      })
    } else {
      this.setState({
        value : this.state.value - Number(e.target.value.slice(1))
      })
    }
  }

  render() {
    return (
      <div className="App">
        <input type="button" value="+1" onClick={this.calculate}/>
        <input type="button" value="+10" onClick={this.calculate}/>
        <input type="button" value="+100" onClick={this.calculate}/>
        <input type="button" value="+1000" onClick={this.calculate}/>
        <input type="button" value="-1" onClick={this.calculate}/>
        <input type="button" value="-10" onClick={this.calculate}/>
        <input type="button" value="-100" onClick={this.calculate}/>
        <input type="button" value="-1000" onClick={this.calculate}/>
        <div className="value">{this.state.value}</div>
      </div>
    );
  }
}

export default App;
