
import  { Section } from "./Section/Section";
import React, { Component } from "react";
import  { ContactForm } from "./ContactForm/ContactForm";
import  { FilterContacts } from "./FiltrContacts/FiltrContacts";

class App extends Component {
	
	state = {
		contacts: [
			{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
			{id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
			{id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
			{id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
		],
		filter: '',
		name: '',
		number: '',
	};
	
	AddFormSubmit = contact => {
		if (
      this.state.contacts.find(
        cont => cont.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) 
		{
      return alert(`${contact.name} is already in contacts`);
    }
		this.setState(prevState => ({
      contacts: [...prevState.contacts, contact]
    }))
		console.log(contact.name);
	};

	onChangeFilter = event => {
		const { name, value } = event.currentTarget;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<>
			<Section>
				<ContactForm AddFormSubmit={this.AddFormSubmit} />
			</Section>
			<Section>
				<FilterContacts onChangeFilter={this.onChangeFilter} />
			</Section>
			</>
			
		)
	}	
}; 

export default App;

