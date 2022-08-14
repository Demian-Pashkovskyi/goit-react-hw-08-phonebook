
import PropTypes from 'prop-types';

export const FilterContacts = ({ onChangeFilter, value, onFilter }) => {
  return (
		<>
    <label >
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={value}
          onChange={onChangeFilter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
    </label>{value && <list>{onFilter()}</list>}
		</>
  );
}

FilterContacts.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};