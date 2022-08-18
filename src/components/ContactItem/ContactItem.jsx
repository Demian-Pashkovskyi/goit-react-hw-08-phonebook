import { Item } from "./ContactItemStyled";
import { IconButton } from "../Button/IconButton";
import propTypes from "prop-types";

export const ContactItem = ({ id, name, number, onDelete }) => {
	return (
		<Item>
			<span>{name}:</span>
			<span>{number} </span>
			<IconButton aria-label="Delete contact" onClick={() => onDelete(id)}>
			</IconButton>
		</Item>
	);
};

ContactItem.propTypes = {
	name: propTypes.string.isRequired,
	id: propTypes.string.isRequired,
	number: propTypes.string.isRequired,
	onDelete: propTypes.func.isRequired,
};