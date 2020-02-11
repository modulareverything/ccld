import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

// ============================================================================

const Title = ({ is: title }) => <H2>{title}</H2>;

// ============================================================================

const H2 = styled.h2`
  ${tw`
    text-2xl
  `}
`;

// ============================================================================

Title.propTypes = {
  is: PropTypes.string.isRequired,
};

// ============================================================================

export default Title;
