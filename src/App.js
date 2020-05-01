import React from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationList from "./components/LocationList";
import ForecastExtended from "./components/ForecastExtended";
import './App.css';

const cities = [
    'Buenos Aires,AR',
    'Moreno,AR',
    'Campinas,BR',
    'Salvador,BR',
    'Stockholm,SE'
];

class App extends React.Component {

    constructor() {
        super();
        this.state = { city: 'Nueva ciudad' };
    }
    handleSelectedLocation = city => {
        this.setState({city});
        console.log(`handleSelectedLocation: ${city}`);
    };

    render() {
        const { city } = this.state;
        return (
            <Grid>
                <Row>
                    <AppBar position="sticky">
                        <Toolbar>
                            <Typography variant="subtitle1" color="inherit">
                                Weathereact
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <LocationList
                            cities={cities}
                            onSelectedLocation={this.handleSelectedLocation}>
                        </LocationList>
                    </Col>
                    <Col xs={12} md={6}>
                        <Paper elevation={4}>
                            <div className="details">
                                <ForecastExtended city={city} />
                            </div>
                        </Paper>
                    </Col>

                </Row>
            </Grid>
        );
    }

}

export default App;
