import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Header from '../components/header'

export default ({ data }) => (
  <Layout>
    {/**
     * Set some meta data
     */}
    <Helmet>
      <meta charSet="utf-8" />
      <title>{data.site.siteMetadata.title}</title>
    </Helmet>

    {/**
     * The main page header
     */}
    <Header siteTitle={data.site.siteMetadata.title} />
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
