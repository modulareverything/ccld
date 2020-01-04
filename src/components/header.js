import React from 'react'
import Helmet from 'react-helmet'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'
import Container from '../components/container'

const Header = props => {
  /**
   * Run the static query to get the site title
   */
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  /**
   * Add some styling to the header
   */
  const PageHeader = styled.header`
    ${tw`py-4`}
  `
  /**
   * Let's construct the navigation
   */
  const TopNavigation = styled.ul`
    ${tw`
      flex flex-row
    `}

    & li a:hover {
      ${tw`underline`}
    }

    & li {
      ${tw`mr-1`}

      &::after {
        content: ',';
      }

      &:last-of-type {
        ${tw`mr-0`}

        &::after {
          content: '';
        }
      }
    }
  `

  /**
   * Now let's render this out
   */
  return (
    <PageHeader>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {site.siteMetadata.title}
          {props.pageTitle ? ' / ' + props.pageTitle : ''}
        </title>
      </Helmet>

      <Container isFlex={true}>
        {/** First let's render the site name */}
        <h1>
          <Link css={tw`hover:underline`} to="/">
            Chrish Dunne
          </Link>
          <span css={tw`text-gray-500`}>
            {props.pageTitle ? ' / ' + props.pageTitle : ''}
          </span>
        </h1>

        {/** Now let's create the navigation using our styled-component above */}
        <nav aria-label="Main Navigation">
          <TopNavigation>
            <li>
              <span
                css={css`
                  text-decoration: line-through;
                  cursor: not-allowed;
                `}
              >
                Work
              </span>
            </li>
            <li>
              <Link
                to="/spotify-2019"
                activeStyle={{ textDecoration: 'underline' }}
              >
                Spotify 2019
              </Link>
            </li>
            <li>
              <a
                href="https://twitter.com/__ccld"
                rel="noopener noreferrer"
                target="_blank"
              >
                Twitter
              </a>
            </li>
          </TopNavigation>
        </nav>
      </Container>
    </PageHeader>
  )
}

export default Header
