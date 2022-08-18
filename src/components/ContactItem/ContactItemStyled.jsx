import styled from '@emotion/styled';

export const Item = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	&:not(:last-child) {
		margin-bottom: 10px;
	}
`;