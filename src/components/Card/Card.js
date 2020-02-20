import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

import Image from '../Image';

// ============================================================================

const Card = props => {
  const { src } = props;
  return (
    <StyledCard>
      <Image isCard src={src} />
    </StyledCard>
  );
};

// ============================================================================

const StyledCard = styled.div`
  ${tw`
    rounded
    shadow-lg
  `}
  background: var(--color-text);
`;

// ============================================================================

Card.propTypes = {
  src: PropTypes.string,
};

Card.defaultProps = {
  src: null,
};

// ============================================================================

export default Card;
