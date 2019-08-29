import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import LocationList from './components/LocationList';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './App.css';

const cities = [
  'Saltillo,MX',
  'Washington DC.,US',
  'Monclova,MX',
  'Barcelona,es'
];


class App extends Component {
  handleSelectionLocation = city => {
    console.log(`handleSelectionLocation ${city}`);
  }

  render() {
    return (
      <div className="App">
        <Grid fluid>
          <Row>
            <Col xs={12} md={4}>
              <h1>CLIMAS EN ITCOM</h1>
              <hr/>
              <LocationList className="location-list"
                cities={cities}
                onSelectedLocation={this.handleSelectionLocation}>
              </LocationList>
            </Col>
            <Col xs={12} md={8}>
              <Paper elevation={4}>
                <div className="details"></div>
              </Paper>
            </Col>            
          </Row>
        </Grid>
      </div>
    );    
  }
}

export default App;
