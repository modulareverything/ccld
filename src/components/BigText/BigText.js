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
    text-xl
    sm:text-2xl
    leading-snug
    text-white
    font-semibold
    mb-16
  `}

  grid-column: span 9;

  @media (max-width: 640px) {
    grid-column: span 10;
  }

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
