import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/AppSlice';
import { Item } from "./ContactItemStyled";
import { IconButton } from "../Button/IconButton";
import PropTypes from "prop-types";

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const deleteContact = contactIdToDelete => {
    dispatch(removeContact(contactIdToDelete));
  };

  return (
    <Item>
      {name}: {number}{' '}
      <IconButton type="button" onClick={() => deleteContact(id)} data-id={id} aria-label="Delete contact">
        Delete
      </IconButton>
    </Item>
  );
};

ContactItem.propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
};