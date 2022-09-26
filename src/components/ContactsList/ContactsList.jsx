import { useSelector } from 'react-redux';
import { List } from "./ContactsListStyled";
import { ContactItem } from "../ContactItem/ContactItem";
import { selectContactsFilter, selectContactsItems } from 'redux/AppSlice';


export const ContactList = () => {
  const contacts = useSelector(selectContactsItems);
  const filter = useSelector(selectContactsFilter);
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    <List>
      {filteredContacts.length ? (
        filteredContacts.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))
      ) : (
        <li>No contacts</li>
      )}
    </List>
  );
};

