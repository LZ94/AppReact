import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const ExtraInfo = ({humidity,wind}) => (
    <div className="extrainfoCont">
       <span className="extraInfoText">{`Humedad: ${humidity} % - `}</span>
       <span className="extraInfoText">{`Vientos: ${wind}`}</span>
    </div>
);

export default ExtraInfo;  