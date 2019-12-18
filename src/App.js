import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherLocation from './components/WeatherLocation';

class App extends Component {
  render(){ 
    return (
      <div className="App">
        APP CLIMA LIA / Weather App!!!
        <WeatherLocation />
      </div>
    );
  } 
}

export default App;
