import { useForm } from 'react-hook-form';
import { nanoid } from "nanoid";
import { Button } from "../Button/Button";
import { AddForm, Error, InputForm, LabelForm } from "./ContactFormStyled";
import PropTypes from "prop-types";


export const ContactForm = ({ onSubmitHandler }) => {
  const {
    handleSubmit,
    watch,
		register,
		formState: { errors },
    resetField,
  } = useForm({
    defaultValues: { name: '', number: '' },
  });

  const nameValue = watch('name');
  const numberValue = watch('number');

  const onFormSubmit = () => {
    const newContact = {
      id: nanoid(),
      name: nameValue,
      number: numberValue,
    };

    onSubmitHandler(newContact);
    resetField('name');
    resetField('number');
  };


	return (
		// <FormBox onSubmit={handleSubmit(onFormSubmit)}>
			<AddForm autoComplete="off" onSubmit={handleSubmit(onFormSubmit)}>
				<div>
					<LabelForm htmlFor="name">Name</LabelForm>
					<div>
						<InputForm 
							type="text"
							name="name"
							value={nameValue}
							{...register('name', {
								required: { value: true, message: 'This field is required' },
								pattern: {
									value:
										/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/g,
									message:
										"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
								},
							})}
						/>
						{errors.name?.message && <Error>{errors.name?.message}</Error>}
					</div>
				</div>
				<div>
					<LabelForm htmlFor="number">Number</LabelForm>
					<div>
						<InputForm 
							type="tel"
							name="number"
							value={numberValue}
          {...register('number', {
            required: { value: true, message: 'This field is required' },
            pattern: {
              value:
                /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g,
              message:
                'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
            },
          })}
						/>
						{errors.number?.message && <Error>{errors.number?.message}</Error>}
					</div>
				</div>
				<Button type="submit" text={"Add contact"} />
			</AddForm>
		// </FormBox>
	);
}


ContactForm.propTypes = {
	onSubmitHandler: PropTypes.func.isRequired,
};




// const initialValues = {
// 	name: "",
// 	number: "",
// };



// export class ContactForm extends Component {
// 	handleSubmit = ({ name, number }, { resetForm }) => {
// 		const nameInContacts = this.props.contacts.find(
// 			(contact) => contact.name.toLowerCase() === name.toLowerCase()
// 		);
// 		if (nameInContacts) {
// 			toast.warn(`${name} is already in contacts`);
// 			return;
// 		}
// 		const contact = { id: nanoid(), name, number };
// 		this.props.onSubmit(contact);
// 		resetForm();
// 	};

// 	render() {
// 		return (
// 			<Form onSubmit={this.handleSubmit(onFormSubmit)}>
// 				<AddForm autoComplete="off">
// 					<div>
// 						<LabelForm htmlFor="name">Name</LabelForm>
// 						<div>
// 							<InputForm
// 								type="text"
// 								name="name"
// 								pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
// 								title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
// 								required
// 							/>
// 							<FormError name="name" />
// 						</div>
// 					</div>
// 					<div>
// 						<LabelForm htmlFor="number">Number</LabelForm>
// 						<div>
// 							<InputForm
// 								type="tel"
// 								name="number"
// 								pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
// 								title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
// 								required
// 							/>
// 							<FormError name="number" />
// 						</div>
// 					</div>
// 					<Button type="submit" text={"Add contact"} />
// 				</AddForm>
// 			</Form>
// 		);
// 	}
// }

// ContactForm.propTypes = {
// 	onSubmitHandler: propTypes.func.isRequired,
// };