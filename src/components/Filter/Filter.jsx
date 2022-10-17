import { Component } from 'react';
import { PropTypes } from 'prop-types';

export class Filter extends Component {
  static propTypes = {
    contactsFilter: PropTypes.func.isRequired,
  };
  render() {
    return (
      <>
        <h3>Find contacts by name</h3>
        <input type="text" onChange={this.props.contactsFilter} />
      </>
    );
  }
}
