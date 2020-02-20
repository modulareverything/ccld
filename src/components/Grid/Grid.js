import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

// ============================================================================

const Grid = ({ children }) => {
  return <StyledGrid>{children}</StyledGrid>;
};

// ============================================================================

const StyledGrid = styled.div`
  ${tw`mt-20`};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
`;

// ============================================================================

Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

// ============================================================================

export default Grid;
