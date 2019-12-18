import React from 'react';
import Location from './Location';
import Data from './Data';
import PropTypes from 'prop-types';
import './styles.css';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../constants/weatherConst';

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
}

const WeatherLocation = () => ( 
    <div className="location">
        <Location city={"Cuba"} />
        <Data data={data} />
    </div>
);

export default WeatherLocation;