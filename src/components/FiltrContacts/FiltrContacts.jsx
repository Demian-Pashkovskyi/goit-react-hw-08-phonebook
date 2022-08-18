import { Component } from "react";
import { FilterInput, FilterWrapper } from "./FiltrContactsStyled";
import { LabelForm } from "../ContactForm/ContactFormStyled";
import propTypes from "prop-types";

export class Filter extends Component {
	handleChange = ({ target: { value } }) => {
		this.props.onChange(value);
	};

	render() {
		return (
			<FilterWrapper>
				<LabelForm htmlFor="filter">Find contacts by name</LabelForm>
				<div>
					<FilterInput
						name="filter"
						type="filter"
						onChange={this.handleChange}
					/>
				</div>
			</FilterWrapper>
		);
	}
}

Filter.propTypes = {
	onChange: propTypes.func.isRequired,
};