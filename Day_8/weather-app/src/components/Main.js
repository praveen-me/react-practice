import React, { Component } from 'react';

class Main extends Component {
  gaveTemperature = (temp, fixedVal) => {
    return (temp - 273.15).toFixed(fixedVal);
  }

  render() {
    const {name, weather, main} = this.props.data;
    return (
      <main>
        <div className="weather-container">
          <div className="weather-image-container">
            <img src={`http://openweathermap.org/img/w/${weather[0].icon}.png`} alt='weather-icon'/>
          </div>
          <div className="place-name-info">
            <h1 className="place-name">{name}</h1>
            <p className="temperature">{this.gaveTemperature(main.temp, 2)}&deg;C</p>
            <p className="min-max-tem">
              <span className="min-temp">{this.gaveTemperature(main.temp_min, 0)}&deg;C</span>
              <span className="max-temp">{this.gaveTemperature(main.temp_max, 0)}&deg;C</span>
            </p>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;