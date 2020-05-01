import React from 'react';
import PropTypes from 'prop-types';

class ForecastExtended extends React.Component {
    render() {
        const { city } = this.props;
        return (
            <div>
                {`ExtendedForecast for: ${city}`}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
};

export default ForecastExtended;
