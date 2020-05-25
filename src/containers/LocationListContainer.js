import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { setSelectedCity } from "./../actions";
import LocationList from "./../components/LocationList";


class LocationListContainer extends React.Component {

    componentDidMount() {
        console.log("asd" + this.props.cities);
    }


    handleSelectedLocation = city => {
        console.log(`handleSelectedLocation: ${city}`);
        this.props.setCity(city);
    };

    render() {
        return (
            <LocationList
                cities={this.props.cities}
                onSelectedLocation={this.handleSelectedLocation}>
            </LocationList>
        );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired
};

const mapDispatchToProps = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value))
});

export default connect(null, mapDispatchToProps)(LocationListContainer);
