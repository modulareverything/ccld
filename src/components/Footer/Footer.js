import React from 'react';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Container from '../Container';
import Heading from '../Heading';

// ============================================================================

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <div
          css={css`
            grid-column: span 12;
          `}
        >
          <Heading>
            <h2>&copy; {new Date().getFullYear()} Chrish Dunne</h2>
            <p>
              <a href="mailto:hey@chrish.design">hey@chrish.design</a>
            </p>
          </Heading>
        </div>
      </Container>
    </StyledFooter>
  );
};

// ============================================================================

const StyledFooter = styled.footer`
  ${tw`
    mt-6
    mb-8
    text-center
    sm:text-left
  `}
`;

// ============================================================================

export default Footer;
