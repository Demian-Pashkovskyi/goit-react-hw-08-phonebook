import { Item } from "./ContactItemStyled";
import { IconButton } from "../Button/IconButton";
import PropTypes from "prop-types";

export const ContactItem = ({ id, name, number, onDeleteHandler }) => {
	return (
		<Item>
			{name}: {number}{' '}
			<IconButton aria-label="Delete contact" type="button" onClick={() => onDeleteHandler(id)} data-id={id}>
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