import React from 'react';

class Location extends React.Component {
    render() {
        return (
            <div><h1>{this.props.city}</h1></div>
        );
    }
}

export default Location;
