import styled from '@emotion/styled';
import { font } from "../Styled/Mixins";


export const Form = styled.form`
  border: 2px solid #e4e1e1;
  max-width: 400px;
  padding: 16px;
	border-radius:6px;
	
`;

export const LabelForm = styled.label`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
  gap: 8px;
  margin-bottom: 16px;
`;

export const Input = styled.input`
	font-size: 16px;
	font-weight: 400;
	line-height: 1.3;	
	border: 1px solid;
	border-radius: 5px;
	padding: 5px;
`
export const ButtonAdd = styled.button`
padding: 5px 20px;
font-size: 16px;
font-weight: 600;
line-height: 1.3;
height: 30px;
background-color: white;
outline: none;
border: 1px solid;
border-radius: 5px;
cursor: pointer;
:hover {
    background-color:gainsboro;
}
`
export const Span = styled.label`
${font({ fs: 16, fw: 700, lh: 20 })};
	display: block;;
`;