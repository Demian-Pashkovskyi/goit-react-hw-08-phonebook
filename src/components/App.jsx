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





// export class App extends Component {
	
// 	state = {
// 		contacts: [
// 			{ id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
// 			{ id: "id-2", name: "Hermione Kline", number: "443-89-12" },
// 			{ id: "id-3", name: "Eden Clements", number: "645-17-79" },
// 			{ id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// 		],
// 		filter: "",
// 	};
  
  	// componentDidMount() {
		// const conactsToLocalStorage = JSON.parse(
    //   localStorage.getItem('contacts')
    // );

	// 	if(conactsToLocalStorage) {
	// 		this.setState({ contacts: conactsToLocalStorage });
	// 	}
	// }

	// componentDidUpdate(_, prevState) {
	// 	if(this.state.contacts !== prevState.contacts) {
	// 		localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
	// 	}
	// }


	// onSubmitHandler = ({ id, name, number }) => {
// 	const contact = { id, name, number };
// 	this.setState(({ contacts }) => {
// 		return { contacts: [contact, ...contacts] };
// 	});
// };
////////////////////////////////////////////////////////////



// onChangeHandler = (filter) => {
// 	this.setState((prevState) => {
// 		return { ...prevState, filter: filter };
// 	});
// };
////////////////////////////////////////////////////

	// onDeleteHandler = (id) => {
	// 	const filteredContacts = this.state.contacts.filter(
	// 		(contact) => contact.id !== id
	// 	);
	// 	this.setState((prevState) => {
	// 		return { ...prevState, contacts: [...filteredContacts] };
	// 	});
	// };

	// onFilterContacts = () => {
	// 	let filterContact = [];
	// 	if (this.state.filter) {
	// 		filterContact = this.state.contacts.filter(
	// 			(contact) =>
	// 				contact.name.includes(this.state.filter) ||
	// 				contact.name.toLowerCase().includes(this.state.filter)
	// 		);
	// 	} else {
	// 		return this.state.contacts;
	// 	}
	// 	return filterContact;
	// };

// 	render() {
// 		const { contacts, filter } = this.state;
// 		return (
// 			<Container>

// 				<MainTitle>Phonebook</MainTitle>
// 				<ContactForm onSubmit={this.onSubmitHandler} contacts={contacts} />

// 				<SubTitle>Contacts</SubTitle>
// 				<Filter onChange={this.onChangeHandler} />
// 				<ContactList
// 					contacts={contacts}
// 					filter={filter}
// 					onDelete={this.onDeleteHandler}
// 					filterContacts={this.onFilterContacts}
// 				/>
// 			</Container>
// 		);
// 	}
// }