import styled from '@emotion/styled';
import { centerBlock, font, widthHeight } from "../Styled/Mixins";


export const Container = styled.div`
	padding: 40px 40px;
	${centerBlock};
	max-width: 480px;
	border-radius: 20px;
	background-color: #a9cec7;
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.22), 0px 2px 2px rgba(0, 0, 0, 0.24),
		0px 2px 1px rgba(0, 0, 0, 0.32);
`;

export const MainTitle = styled.h1`
	font-family: Georgia, sans-serif;
	${widthHeight(240)};
	${font({ fs: 28, fw: 600, lh: 32 })};
	margin-bottom: 10px;
	color: #2b2b2b;
	text-shadow: 1px 1px 1px #ffffff;
`;

export const SubTitle = styled.h2`
	font-family: Georgia, sans-serif;
	${widthHeight(240)};
	${font({ fs: 24, fw: 600, lh: 28 })};
	margin-bottom: 10px;
	margin-top: 10px;
	color: #2b2b2b;
	text-shadow: 1px 1px 1px #ffffff;
`;