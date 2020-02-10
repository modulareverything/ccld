import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

// ============================================================================

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query Meta {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const SiteTitle = data.site.siteMetadata.title;

  return (
    <>
      <Helmet>
        <title>{SiteTitle}</title>
      </Helmet>
      <StyledLayout>{children}</StyledLayout>
    </>
  );
};

// ============================================================================

const StyledLayout = styled.main`
  ${tw`
    h-screen
    sm:flex
    sm:items-center
    text-white
  `}
  background-color: var(--color-black);
`;

// ============================================================================

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

// ============================================================================

export default Layout;
