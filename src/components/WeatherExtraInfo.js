import React from 'react';
import PropTypes from 'prop-types';

class WeatherExtraInfo extends React.Component {
    render() {
        const { humidity, wind } = this.props;
        return (
            <div>
                <span>{`${humidity} % - `}</span>
                <span>{`${wind} wind`}</span>
            </div>
        );
    }
}

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
};

export default WeatherExtraInfo;
