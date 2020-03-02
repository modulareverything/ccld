import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

// ============================================================================

const BigText = ({ children }) => {
  return <StyledBigText>{children}</StyledBigText>;
};

// ============================================================================

const StyledBigText = styled.h2`
  ${tw`
    text-2xl
    leading-snug
    text-white
    font-semibold
    mb-16
  `}
  grid-column: span 9;

  & em {
    ${tw`
      font-normal
      not-italic
    `}
  }
`;

// ============================================================================

BigText.propTypes = {
  children: PropTypes.objectOf(PropTypes.string).isRequired,
};

// ============================================================================

export default BigText;
