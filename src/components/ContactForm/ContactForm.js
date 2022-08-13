import React, { Component } from "react";
import { nanoid } from "nanoid";

export class ContactForm extends Component {
	state = {
		name: '',
		number: ''
	}

	handleChange = event => {
		const { name, value } = event.currentTarget;

		this.setState({
			[name]: value,
		});
	};

	handleSubmit = event => {
		event.preventDefault();
	
		this.props.onFormSubmit(this.state);

		this.reset();
	};

	reset = () => {
    this.setState({ name: '', number: '' });
  };

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="">
					NAME 
					<input 
					type="text"
					name="name"
					value={this.state.name} onChange={this.handleChange} />
				</label>
				<label htmlFor="">
					PHONE
					<input 
					type="text" 
					name="number"
					value={this.state.number} onChange={this.handleChange} />
				</label>
				<button type="submit">Add contact</button>
			</form>
		);
	}
}