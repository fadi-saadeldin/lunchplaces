import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVenues } from '../../actions';
import {  SearchInput } from '../common';
import VenuesList from './venuesList';
let venuesContent;
let searchInput;
class VenuesDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {searchValue: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({searchValue: event.target.value});
  }

  handleSubmit(event) {
   this.props.getVenues(this.state.searchValue);
    event.preventDefault();
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.devices.update_success) {
  //     this.setState({ searchTrue: false, searchValue: '' });
  //   }
  // }
  render() {
    const { venues_list, loading } = this.props.venues;
    console.log(this.props.venues);
    searchInput = <SearchInput
    placeholder="Search address"
    value={this.state.searchValue}
    handleSubmit={this.handleSubmit.bind(this)}
    handleChange={this.handleChange.bind(this)}
  />
    if (venues_list === null) {
      venuesContent=<div/>
    } else {
    if (Object.keys(venues_list).length > 0) {
      //  Devices List content
      console.log(venues_list);
      venuesContent = <VenuesList
        venues={venues_list}
      />
    } else {
      venuesContent=<div/>
    }
  }
   
    return (
      <div className="venues-list">
        <div className="content-header">
          {searchInput}
        </div>
        {venuesContent}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  venues: state.venues
});

export default connect(mapStateToProps, { getVenues, })(
  VenuesDashboard
);

