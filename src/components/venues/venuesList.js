import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDevices } from '../../actions';
import { SearchInput } from '../common';
import VenueItem from './venueItem';

class VenuesList extends Component {
  render() {

    return (
      <table className="table table-striped ">
        <thead className="content-header">
          <tr className="list_item">
            <th>participants </th>
            {this.props.venues.map((venue, i) =>
              <VenueItem
                key={i}
                venue={venue}
              />)
            }
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    )
  }
}

export default VenuesList