import React from 'react';
import PropTypes from 'prop-types';

// ============================================================================

const RichText = ({ children }) => <p>{children}</p>;

// ============================================================================

RichText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

// ============================================================================

export default RichText;
