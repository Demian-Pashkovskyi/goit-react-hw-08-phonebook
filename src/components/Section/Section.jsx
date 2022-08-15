import { Box } from "../Styled/Box";
import { Title } from "../Section/SectionStyled";
import propTypes from "prop-types";

export const Section = ({ title, children }) => {
	return (
		<Box as="section" p={4}>
			<Title>{title}</Title>
			{children}
		</Box>
	);
};

Section.propTypes = {
	title: propTypes.string,
	children: propTypes.node,
};