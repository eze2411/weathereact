import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

class WeatherExtraInfo extends React.Component {
    render() {
        const { humidity, wind } = this.props;
        return (
            <div className="weatherExtraInfoCont">
                <span className="extraInfoText">{`Humidity: ${humidity} %`}</span>
                <span className="extraInfoText">{`Winds: ${wind}`}</span>
            </div>
        );
    }
}

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
};

export default WeatherExtraInfo;
