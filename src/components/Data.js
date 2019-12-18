import React from 'react';
import Temperature from './Temperature';
import PropTypes from 'prop-types';
import ExtraInfo from './ExtraInfo';
import './styles.css';

const Data = ({ data: { temperature,  weatherState, humidity, wind } }) => {  
   return  <div className="dataCont" >
                <Temperature temperature={temperature} state={weatherState}/>
                <ExtraInfo humidity={humidity} wind={wind} />
           </div>
};

Data.protoType = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
};

export default Data;