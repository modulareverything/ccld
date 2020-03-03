import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

// ============================================================================

const Button = ({ mailto, link, children }) => {
  return (
    <StyledButton href={mailto ? `mailto:${link}` : link}>
      {children}
    </StyledButton>
  );
};

// ============================================================================

const StyledButton = styled.a`
  ${tw`
    mt-8
    block
    text-xs
    font-normal
    rounded
    border
    border-solid
    border-white
    py-3
    px-10
    sm:w-56
    w-full
    bg-transparent
    text-white
    no-underline
    text-center
  `}
`;

// ============================================================================

Button.propTypes = {
  children: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string.isRequired,
  mailto: PropTypes.bool,
};

Button.defaultProps = {
  mailto: false,
};

// ============================================================================

export default Button;
