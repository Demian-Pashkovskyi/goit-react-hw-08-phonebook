import { FilterInput, FilterWrapper } from "./FiltrContactsStyled";
import { LabelForm } from "../ContactForm/ContactFormStyled";
import PropTypes from "prop-types";

export const Filter = ({ onInputChange }) => (
	<FilterWrapper>
				<LabelForm htmlFor="filter">Find contacts by name</LabelForm>
				<div>
					<FilterInput
						name="filter"
						type="text"
						onChange={onInputChange}
					/>
				</div>
			</FilterWrapper>
	);


Filter.propTypes = {
	onInputChange: PropTypes.func.isRequired,
};