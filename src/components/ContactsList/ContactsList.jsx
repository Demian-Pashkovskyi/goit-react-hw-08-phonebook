import { List } from "./ContactsListStyled";
import { ContactItem } from "../ContactItem/ContactItem";
import PropTypes from "prop-types";

export const ContactList = ({ contacts, onDeleteHandler }) => (
  <List>
    {contacts.length ? (
      contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          onDeleteHandler={onDeleteHandler}
          id={id}
        />
      ))
    ): (
      <li>No contacts</li>
    )
	}
  </List>
);

// export const ContactList = ({ contacts, onDeleteHandler }) => {
// 	return (
// 		<List>
// 			{contacts().map(({ name, number, id }) => (
// 				<ContactItem
// 					key={id}
// 					name={name}
// 					id={id}
// 					number={number}
// 					onDeleteHandler={onDeleteHandler}
// 				/>
// 			))}
// 		</List>
// 	);
// };

ContactList.propTypes = {
	contacts: PropTypes.array.isRequired,
	onDeleteHandler: PropTypes.func.isRequired,
};

