import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import  { ContactForm } from "./ContactForm/ContactForm";
import  { ContactList } from "./ContactsList/ContactsList";
import  { Filter } from "./FiltrContacts/FiltrContacts";
import { Container, MainTitle, SubTitle } from "./Styled/App";



export const App = () => {
  
	return (
		<>
		<Container>
			<MainTitle>Phonebook</MainTitle>
				<ContactForm />
			<SubTitle>Contacts</SubTitle>
				<Filter />
			<ContactList/>
		</Container>
		<ToastContainer autoClose={2000} />
    </>
	);
};
