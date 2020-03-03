import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

// ============================================================================

const Container = props => {
  const { children } = props;
  const breakpoints = [460, 640, 768, 900];

  const PageContainer = styled.div`
    ${tw`
      mx-auto
      px-4
      w-full
    `}
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    ${breakpoints.map(
      minWidth =>
        `@media(min-width: ${minWidth}px) { max-width: ${minWidth}px }`
    )}
  `;

  return <PageContainer>{children}</PageContainer>;
};

// ============================================================================

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

// ============================================================================

export default Container;
