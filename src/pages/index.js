import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { Helmet } from 'react-helmet'

export default ({ data }) => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{data.site.siteMetadata.title}</title>
    </Helmet>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
