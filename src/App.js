import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtended from './components/ForecastExtended';
import { Grid, Row, Col } from 'react-flexbox-grid';

import './App.css';

const cities = [
  'Saltillo,MX',
  'Washington DC.,US',
  'Monclova,MX',
  'Barcelona,es'
];


class App extends Component {

  constructor() {
    super();
    this.state = { city: null };
  }

  render() {
    const { city } = this.state;
    return (
      <div className="App">
        <Grid fluid>
          <Row>
            <Col xs={12} md={4}>
              <h1>IWEATHER</h1>
              <hr/>
              <LocationListContainer
                className="location-list"
                cities={cities}>
              </LocationListContainer>
            </Col>
            <Col xs={12} md={8}>
              <Paper elevation={4}>
                <div className="detail">
                  {
                    city && <ForecastExtended city={city}></ForecastExtended>
                  }
                </div>
              </Paper>
            </Col>            
          </Row>
        </Grid>
      </div>
    );    
  }
}

export default App;
