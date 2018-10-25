import React, { Component } from 'react';
import DisplayComponent from './DisplayComponent';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value : '',
      fonts : ['Karla', 'Helevitica Neue', 'Bree serif', 'Lato', 'Cabin', 'Pacifico', 'Open Sans Condensed']
    }
  }

  handleOnChange = (e) => {
    this.setState({
      value : e.target.value
    })
  }
  
  render() {
    const {fonts, value} = this.state;
    return (
      <div className="App">
        <div className="text-container wrapper">
          <input type="text" onChange={this.handleOnChange} value={value}/>
        </div>
        {
          fonts.map(font => <DisplayComponent value={this.state.value} classes={font}/>)
        }
      </div>
    );
  }
}

export default App;
