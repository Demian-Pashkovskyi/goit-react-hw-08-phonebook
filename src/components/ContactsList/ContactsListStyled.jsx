import styled from '@emotion/styled';
import { font } from "../Styled/Mixins";

export const List = styled.ol`
	padding: 20px;
	max-width: 400px;
	overflow-y: hidden;

	${font({ fs: 16, fw: 400, lh: 20 })};
	border-radius: 20px;
	background-color: #f5f5fa;
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.22), 0px 2px 2px rgba(0, 0, 0, 0.24),
		0px 2px 1px rgba(0, 0, 0, 0.32);
`;