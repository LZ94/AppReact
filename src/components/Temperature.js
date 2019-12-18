import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../constants/weatherConst';
import './styles.css';

const icons = {
    [SUN]: "day-sunny",
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy",
};

const getWeatherIcon = state => {
    const icon = icons[state];
    const sizeIcon = "4x";
    if(icon)
        return <WeatherIcons className= "wicon" name={icon} size={sizeIcon} />
    else
        return <WeatherIcons className= "wicon" name={"day-sunny"} size={sizeIcon} />
}

const Temperature = ({temperature,state}) => (
    <div className="temperatureCont">
        {
            getWeatherIcon(state)
        }
        <span className="temperature"> {`${temperature}`} </span>
        <span className="temperatureType"> {`C°`} </span>
    </div>
);

Temperature.propTypes = {
    temperature: PropTypes.number,
    state: PropTypes.string,
};

export default Temperature;

