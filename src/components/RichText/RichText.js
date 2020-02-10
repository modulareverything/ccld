import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

// ============================================================================

const RichText = ({ children }) => <P>{children}</P>;

// ============================================================================

const P = styled.p`
  ${tw`
    max-w-md
  `}
`;

// ============================================================================

RichText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

// ============================================================================

export default RichText;
