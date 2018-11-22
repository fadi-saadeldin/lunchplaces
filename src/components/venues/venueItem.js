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
     const { name } = this.props.venue;

    return (
      <th><div className="list_item">{name}</div></th>
    );
  }
}
export default connect(null,)(VenueItem);
