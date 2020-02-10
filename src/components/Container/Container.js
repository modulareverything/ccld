import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

// ============================================================================

const Container = props => {
  const { children, display } = props;
  const breakpoints = [640, 768];

  const PageContainer = styled.div`
    ${tw`
      mx-auto
      px-4
      w-full
    `}
    display: ${display};
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
  display: PropTypes.string,
};

Container.defaultProps = {
  display: 'block',
};

// ============================================================================

export default Container;
