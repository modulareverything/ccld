import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

import Header from '../Header';
import Footer from '../Footer';

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
        <style>{'body { background-color: var(--color-background); }'}</style>
      </Helmet>

      <StyledLayout>
        <Header />
        {children}
        <Footer />
      </StyledLayout>
    </>
  );
};

// ============================================================================

const StyledLayout = styled.main`
  ${tw`
    py-4
    text-white
  `}
  background-color: var(--color-background);
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
