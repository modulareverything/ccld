import React from 'react';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

// ============================================================================

const Heading = ({ children }) => {
  return <StyledHeading>{children}</StyledHeading>;
};

// ============================================================================

const StyledHeading = styled.div`
  ${tw`mb-16`}

  & h2 {
    ${tw`
      mb-1
      text-xs
      font-medium
    `}
  }

  & p {
    ${tw`
      text-xs
      mb-0
    `}
  }

  & a {
    ${tw`
      text-white
      no-underline
    `}

    &:hover {
      ${tw`underline`}
    }
  }
`;

// ============================================================================

export default Heading;
