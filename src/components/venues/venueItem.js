import React, { Component } from 'react';
import { connect } from 'react-redux';

class VenueItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: "",
    };
    // this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    console.log(this.props.venue);
     const { name ,categories} = this.props.venue;

    return (
      <th><div className="list_item"><div>{name}</div><div>{categories[0].name}</div></div></th>
    );
  }
}
export default connect(null,)(VenueItem);
