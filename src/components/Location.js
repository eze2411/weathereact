import React from 'react';
import PropTypes from 'prop-types';

class Location extends React.Component {
    render() {
        const { city } = this.props;

        return (
            <div>
                <h1>{city}</h1>
            </div>
        );
    }
}

Location.propTypes = {
    city: PropTypes.string.isRequired
};

export default Location;
