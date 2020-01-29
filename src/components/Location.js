import React from 'react';

class Location extends React.Component {
    render() {
        // Destructuring
        const { city } = this.props;

        return (
            <div><h1>{city}</h1></div>
        );
    }
}

export default Location;
