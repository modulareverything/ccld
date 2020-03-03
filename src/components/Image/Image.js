import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

import Placeholder from '../../../static/images/placeholder.jpg';
import Placeholder2 from '../../../static/images/placeholder2.png';
import Placeholder3 from '../../../static/images/placeholder3.png';
import Placeholder4 from '../../../static/images/placeholder4.png';

// ============================================================================

const Image = () => {
  return (
    <>
      <Img src={Placeholder} alt="" />
      <Img src={Placeholder2} alt="" />
      <Img src={Placeholder3} alt="" />
      <Img src={Placeholder4} alt="" />
    </>
  );
};

// ============================================================================

const Img = styled.img`
  ${tw`
    rounded
    mb-8
  `}
  grid-column: span 12;
`;

// ============================================================================

Image.propTypes = {};

// ============================================================================

export default Image;
