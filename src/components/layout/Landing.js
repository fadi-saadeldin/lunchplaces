import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getDevices} from '../../actions';
import VenuesDashboard from '../venues/venuesDashboard';
class Landing extends Component {

  render() {
    return (
      <div className="dashboard">
      <div className="container">
           <h1>Dashboard</h1>
            <VenuesDashboard/>
      </div>
      </div>
    );
  }
}
export default Landing;

