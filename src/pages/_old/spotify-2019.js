import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import Layout from '../components/layout'
import Header from '../components/header'
import Container from '../components/container'
import Record from '../components/record'

class Spotify2019 extends React.Component {
  render() {
    /**
     * Set a few variables to save our breath a bit
     */
    const { data } = this.props

    /**
     * Create our record crate
     */
    const Crate = styled.div`
      ${tw`mb-4`}
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: 1fr;

      @media (min-width: 440px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 768px) {
        ${tw`mt-4 mb-12`}
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
      }
    `

    return (
      <Layout>
        {/**
         * The main page header
         */}
        <Header pageTitle="Spotify 2019" />

        {/**
         * Here we render out the records
         */}
        <section>
          <Container>
            <Crate>
              {data.allSpotifyPlaylist.edges.map(({ node }, index) => (
                <Record
                  key={index}
                  coverArt={node.image.localFile.childImageSharp.fluid}
                  playlistName={node.name}
                  spotifyLogo={data.file.childImageSharp.fluid}
                  playlistUrl={node.external_urls.spotify}
                />
              ))}
            </Crate>
          </Container>
        </section>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    allSpotifyPlaylist(
      limit: 12
      filter: { name: { regex: "/2019/" } }
      sort: { fields: order }
    ) {
      edges {
        node {
          name
          external_urls {
            spotify
          }
          order
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1280) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }

    file(name: { regex: "/spotify_logo/" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Spotify2019
