import React, { Component } from 'react';
import './scss/App.scss';
import Header from './components/Header';
import Loader from './components/Loader';
import Main from './components/Main';
import {ErrorInternet, Errorvalue} from './components/Error'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value : '',
      weatherData : null,
      error : false,
      errMsg : ''
    }
  }

  handleChange = e => {
    this.setState({
      value : e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.fetchData();
  }

  handleClick = e => {
    e.preventDefault();
    this.fetchData();
  }

  fetchData = () => {
    const {value} = this.state;
    this.setState({
      isLoading : true
    })

    if(!navigator.onLine) {
      return this.setState({
        error : true,
        errMsg : <ErrorInternet/>, 
        isLoading:false
      })
    }

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=5437540a4b1f9a06516d43ed1ef3d5ee`)
      .then(res => res.json())
      .then(data => {
        if(data.cod === '404') {
         return this.setState({
            error : true,
            errMsg : <Errorvalue/>,
            isLoading : false
          });
        }
        return this.setState({
          weatherData : data,
          isLoading : false,
          error : false,
          errMsg : ''
        });
      })
  }

  render() {
    const {weatherData, error, isLoading, errMsg} = this.state;
    return (
      <div className="App">
        <Header onChange={this.handleChange} onSubmit={this.handleSubmit} value={this.state.value} onClick={this.handleClick}/>
        {
          isLoading ? 
          <Loader />  : error ? 
          <p>{errMsg}</p>:
          weatherData ? 
          <Main data={weatherData}/> :
          <p></p>
        }
      </div>
    );
  }
}

export default App;
