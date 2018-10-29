import React, { Component } from 'react';
import './scss/App.scss';
import Header from './components/Header';
import Loader from './components/Loader';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value : '',
      weatherData : null,
      error : false
    }
  }

  handleChange = e => {
    this.setState({
      value : e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    const {value} = this.state;
    this.setState({
      isLoading : true
    })

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=5437540a4b1f9a06516d43ed1ef3d5ee`)
      .then(res => res.json())
      .then(data => {
        if(data.cod === '404') {
         return this.setState({
            error : true,
            isLoading : false
          });
        }
        return this.setState({
          weatherData : data,
          isLoading : false
        });
      });
  }

  handleClick = e => {
    e.preventDefault();
    const {value} = this.state;
    this.setState({
      isLoading : true
    })

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=5437540a4b1f9a06516d43ed1ef3d5ee`)
      .then(res => res.json())
      .then(data => {
        if(data.cod === '404') {
         return this.setState({
            error : true,
            isLoading : false
          });
        }
        return this.setState({
          weatherData : data,
          isLoading : false
        });
      })
  }

  render() {
    return (
      <div className="App">
        <Header onChange={this.handleChange} onSubmit={this.handleSubmit} value={this.state.value} onClick={this.handleClick}/>
        {
          this.state.isLoading ? <Loader />  : ''
        }
      </div>
    );
  }
}

export default App;
