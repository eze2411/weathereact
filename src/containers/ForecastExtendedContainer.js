import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import ForecastExtended from "../components/ForecastExtended";


class ForecastExtendedContainer extends React.Component {
    render() {
        const {city, forecastData} = this.props;
        return (
            <div>
                { city &&
                <ForecastExtended city={city} forecastData={forecastData} /> }
            </div>
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array.isRequired
};

const mapStateToProps = ({ city, cities }) => ({ city, forecastData: cities[city] && cities[city].forecastData });

export default connect(mapStateToProps, null)(ForecastExtendedContainer);
