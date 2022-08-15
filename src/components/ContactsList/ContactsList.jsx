import PropTypes from 'prop-types';
import { List, ListItem, ListItemText, Btn } from "./ContactsListStyled"

export const ContactListItem = ({ contact, deleteContact }) => {
  return (
    <ListItem id={contact.id}>
      <ListItemText>
        {contact.name} : {contact.number}
      </ListItemText>
    <Btn 
		type="button"
		onClick={() => {
			deleteContact(contact.id);}}
    >Delete</Btn>
    </ListItem>
  );
}

ContactListItem.propType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export const ContactList = ({ contacts, filter, deleteContact}) => {
	if (filter !== '') {
    return;
  }
  return (
    <List >
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </List>
  );
}

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};