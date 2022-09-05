import styled from '@emotion/styled';
import { font } from "../Styled/Mixins";
// import { Form } from "formik";


export const AddForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	max-width: 400px;
	height: 240px;
	padding: 20px;
	border-radius: 20px;
	background-color: rgb(227, 227, 238);
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.22), 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 2px 1px rgba(0, 0, 0, 0.32);
`;

export const LabelForm = styled.label`
${font({ fs: 16, fw: 700, lh: 20 })};
display: block;
margin-bottom: 10px;
`;

export const InputForm = styled.input`
	border: 0;
	outline: 0;
	width: 100%;
	margin-bottom: 10px;
	border-radius: 20px;
	padding: 10px;
	background-color: #ebedf3;
	${font({ fs: 16, fw: 400, lh: 20 })};
	box-shadow: inset 2px 2px 5px #a1a6b8,
		inset -5px -5px 10px #ffffff;
	transition: all 0.2s ease-in-out;
	appearance: none;
`;


export const Message = styled.p`
	${font({ fs: 14, fw: 400, lh: 16 })};
	color: #e3f6f6f7;
	display: block;
	margin-bottom: 4px;
`;

export const SpanForm = styled.label`
${font({ fs: 16, fw: 700, lh: 20 })};
display: flex;
flex-direction: column;
gap: 16px;
  margin-bottom: 24px;
`;

export const Error = styled.p`
  color: red;
`;

// export const FormBox = styled.form`
//   border: 1px solid white;
//   width: 400px;
//   padding: 24px;
// `;