import { useState } from 'react';
import  { ContactForm } from "./ContactForm/ContactForm";
import  { ContactList } from "./ContactsList/ContactsList";
import  { Filter } from "./FiltrContacts/FiltrContacts";
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Container, MainTitle, SubTitle } from "./Styled/App";

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState(() => '');

  const onSubmitHandler = newContact => {
    if (!hasDuplicates(newContact.name)) {
      setContacts([...contacts, newContact]);
    } else {
      alert(`${newContact.name} is already in contacts.`);
    }
  };

  const hasDuplicates = duplicate => {
    return contacts.find(({ name }) => name === duplicate);
  };

  const onFilterContacts = () => {
    const filterContact = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterContact)
    );
  };

  const onInputChange = evt => {
    setFilter(evt.target.value);
  };

  const onDeleteHandler = contactIdToDelete => {
    setContacts(contacts.filter(({ id }) => id !== contactIdToDelete));
  };

	return (
		<Container>

			<MainTitle>Phonebook</MainTitle>
			<ContactForm onSubmitHandler={onSubmitHandler} />

			<SubTitle>Contacts</SubTitle>
			<Filter onInputChange={onInputChange} />
			<ContactList
				contacts={onFilterContacts()}
				onDeleteHandler={onDeleteHandler}
			/>
		</Container>
	);
};

