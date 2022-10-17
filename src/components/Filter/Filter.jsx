import { PropTypes } from 'prop-types';

export const Filter = ({ contactsFilter }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <input type="text" onChange={contactsFilter} />
    </>
  );
};
Filter.propTypes = {
  contactsFilter: PropTypes.func.isRequired,
};
