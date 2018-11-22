import React, { Component } from 'react';
import VenuesDashboard from '../venues/venuesDashboard';
class Landing extends Component {

  render() {
    return (
      <div className="dashboard">
      <div className="container">
            <VenuesDashboard/>
      </div>
      </div>
    );
  }
}
export default Landing;

