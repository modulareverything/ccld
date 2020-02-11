import React from 'react';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

// ============================================================================

const Social = () => (
  <Platforms>
    <li>
      <a
        href="https://www.twitter.com/__ccld"
        css={css`
          color: var(--color-social-twitter);
        `}
      >
        Twitter
      </a>
    </li>
    <li>
      <a
        href="https://www.github.com/chrish-d"
        css={css`
          color: var(--color-social-github);
        `}
      >
        GitHub
      </a>
    </li>
    <li>
      <a
        href="https://www.dribbble.com/_ccld"
        css={css`
          color: var(--color-social-dribbble);
        `}
      >
        Dribbble
      </a>
    </li>
    <li>
      <a
        href="mailto:hey@chrish.design"
        css={css`
          color: var(--color-brand);
        `}
      >
        Email
      </a>
    </li>
  </Platforms>
);

// ============================================================================

const Platforms = styled.ul`
  ${tw`
    list-none
    m-0
    p-0
  `}

  & li {
    ${tw`mb-0`}
  }

  & a {
    ${tw`no-underline`}

    &:hover {
      ${tw`underline`}
    }
  }
`;

// ============================================================================

export default Social;
