import React, { Component } from "react";
import  { ContactForm } from "./ContactForm/ContactForm";


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
	
	formSubmit = data => {
		console.log(data);
	};

	// handleNameChange = event => {
	// 	// console.log(event.currentTarget.value);
	// 	this.setState({ name: event.currentTarget.value })
	// };

	// handleNumberChange = event => {
	// 	// console.log(event.currentTarget.value);
	// 	this.setState({ number: event.currentTarget.value })
	// };
	
	render() {
		return (
			<ContactForm onFormSubmit={this.formSubmit} />
		)
	}	
}; 

export default App;
