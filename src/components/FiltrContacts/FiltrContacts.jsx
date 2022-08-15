
import PropTypes from 'prop-types';

export const FilterContacts = ({ onChange, value, onFilter }) => {
  return (
		<>
    <label >
        <span>Find contacts by name</span>
        <input
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
    </label>{value && <list>{onFilter()}</list>}
		</>
  );
}

FilterContacts.propTypes = {
  onChange: PropTypes.func.isRequired,
};