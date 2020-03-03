import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import Img from 'gatsby-image';

// ============================================================================

const Image = () => {
  const data = useStaticQuery(graphql`
    query PlaceholderImages {
      allImageSharp {
        edges {
          node {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  return (
    <>
      {data.allImageSharp.edges.map(({ node }) => {
        return (
          <StyledImg>
            <Img fluid={node.fluid} alt="" />
          </StyledImg>
        );
      })}
    </>
  );
};

// ============================================================================

const StyledImg = styled.div`
  ${tw`
    mb-8
  `}
  grid-column: span 12;

  & img {
    ${tw`
      rounded
    `}
  }
`;

// ============================================================================

Image.propTypes = {};

// ============================================================================

export default Image;
