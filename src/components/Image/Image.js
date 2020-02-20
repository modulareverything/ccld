import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import tw from 'tailwind.macro';
import Img from 'gatsby-image';

// ============================================================================

const Image = props => {
  const data = useStaticQuery(graphql`
    query Placeholder {
      file(name: { eq: "project" }) {
        childImageSharp {
          fluid(jpegQuality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const placeholder = data.file.childImageSharp.fluid;
  const { src: image, isCard } = props;

  const CardImg = () => (
    <Img css={tw`rounded`} fluid={image === null ? placeholder : image} />
  );

  return <>{isCard && <CardImg />}</>;
};

// ============================================================================

Image.propTypes = {
  src: PropTypes.string,
  isCard: PropTypes.bool,
};

Image.defaultProps = {
  src: null,
  isCard: false,
};

// ============================================================================

export default Image;
