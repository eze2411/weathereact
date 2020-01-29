import React from 'react';

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

export default WeatherExtraInfo;
