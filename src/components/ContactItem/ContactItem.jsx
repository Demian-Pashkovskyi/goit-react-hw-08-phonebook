import { Item } from "./ContactItemStyled";
import { IconButton } from "../Button/IconButton";
import PropTypes from "prop-types";

export const ContactItem = ({ id, name, number, onDeleteHandler }) => {
	return (
		<Item>
			<span>{name}:</span>
			<span>{number} </span>
			<IconButton aria-label="Delete contact" onClick={() => onDeleteHandler(id)}>
			</IconButton>
		</Item>
	);
};

ContactItem.propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
	onDeleteHandler: PropTypes.func.isRequired,
};