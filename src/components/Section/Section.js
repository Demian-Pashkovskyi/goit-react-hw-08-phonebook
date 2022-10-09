import PropTypes from 'prop-types';
import { Box } from '../Styled/Box';
import { SectionHeading } from './SectionStyled';

export const Section = ({ title, children }) => (
  <Box
    as="section"
    p={4}
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
  >
    <SectionHeading>{title}</SectionHeading>
    {children}
  </Box>
);

Section.propType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object,
};