import PropTypes from 'prop-types';
import React, { Component } from "react";
import { nanoid } from "nanoid";

export class ContactForm extends Component {
	static propTypes = {
    AddFormSubmit: PropTypes.func.isRequired,
  }; 

	state = {
		name: '',
		number: ''
	}

	userId = nanoid();

	handleChange = event => {
		const { name, value } = event.currentTarget;
		this.setState({ [name]: value });
	};

	onSubmit = event => {
		event.preventDefault();
		const contact = {
				name: this.state.name,
				number:this.state.number,
				id: this.userId
	}
		this.props.AddFormSubmit(contact)
			this.reset()
};

	reset = () => {
    this.setState({ name: '', number: '' });
  };

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<label htmlFor="name">
					NAME 
					<input 
					type="text"
					name="name"
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  				title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  				required
					value={this.state.name} 
					onChange={this.handleChange}
					id={this.nameId} 
				/>
				</label>
				<label htmlFor="number" >
					PHONE
					<input 
					type="tel" 
					name="number"
					pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  				title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  				required
					value={this.state.number} 
					onChange={this.handleChange}
					id={this.numberId} 
				/>
				</label>
				<button type="submit">Add contact</button>
			</form>
		);
	}
}